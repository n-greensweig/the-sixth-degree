const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// POST new scripts to guess to the database
router.post('/send-back/:id/:code/:guesser', async (req, res) => {

  try {
    const selectedScripts = req.body.selectedScripts;
    const gameId = req.params.id;
    const code = req.params.code;
    const guesser = req.params.guesser;

    const queryText = `
    INSERT INTO "guess" 
      ("game_id", "guesser_id", "script_id",  "first_actor_guess", "seventh_actor_guess", "code")
    VALUES 
      ($1, $2, $3, $4, $5, $6);
  `;

    let scriptValuesQueryText = `
            SELECT "first_actor", "seventh_actor" FROM "script" WHERE "id" = $1;`;

    for (const scriptId of selectedScripts) {

      // Fetch the first_actor and seventh_actor based on scriptId
      const scriptResult = await pool.query(scriptValuesQueryText, [scriptId]);
      const { first_actor, seventh_actor } = scriptResult.rows[0];

      await pool.query(queryText, [gameId, guesser, scriptId, first_actor, seventh_actor, code])
    }

    res.sendStatus(201);
  } catch (error) {
    console.log('Error adding scripts to the database', error);
    res.sendStatus(500);
  }

});

// PUT route to submit user's guess
router.put('/:id', async (req, res) => {

  try {

    const guess = req.body;
    const getGuessQuery = `
  SELECT * FROM "guess" WHERE "id" = $1 AND "guesser_id" = $2;
`;

    const queryText = `
UPDATE "guess" SET 
"first_actor_guess" = $1,
"first_appearance_guess" = $2,
"second_actor_guess" = $3,
"second_appearance_guess" = $4,
"third_actor_guess" = $5,
"third_appearance_guess" = $6,
"fourth_actor_guess" = $7,
"fourth_appearance_guess" = $8,
"fifth_actor_guess" = $9,
"fifth_appearance_guess" = $10,
"sixth_actor_guess" = $11,
"sixth_appearance_guess" = $12,
"seventh_actor_guess" = $13,
"is_complete" = $14
WHERE "id" = $15 AND "guesser_id" = $16;
`;

    await pool.query(queryText, [
      guess.first_actor, guess.first_appearance_guess,
      guess.second_actor_guess, guess.second_appearance_guess, guess.third_actor_guess, guess.third_appearance_guess,
      guess.fourth_actor_guess, guess.fourth_appearance_guess, guess.fifth_actor_guess, guess.fifth_appearance_guess,
      guess.sixth_actor_guess, guess.sixth_appearance_guess, guess.seventh_actor, guess.complete, req.params.id, req.user.id
    ]);

    const guessQueryResult = await pool.query(getGuessQuery, [req.params.id, req.user.id]);
    const guessData = guessQueryResult.rows[0];

    const getActorGuessScoreQuery = `SELECT "first_actor_guess", "second_actor_guess",
    "third_actor_guess", "fourth_actor_guess", "fifth_actor_guess", "sixth_actor_guess" FROM "guess" 
    JOIN "script" on "script"."id" = "guess"."script_id"
    WHERE "script"."id" = $1 AND "guess"."id" = $2;`;
    const getActorScriptValuesQuery = `SELECT "first_actor", "second_actor",
    "third_actor", "fourth_actor", "fifth_actor", "sixth_actor" FROM "guess" 
    JOIN "script" on "script"."id" = "guess"."script_id"
    WHERE "script"."id" = $1 AND "guess"."id" = $2;`;
    const getAppearanceGuessScoreQuery = `SELECT "first_appearance_guess", "second_appearance_guess",
    "third_appearance_guess", "fourth_appearance_guess", "fifth_appearance_guess", "sixth_appearance_guess" FROM "guess" 
    JOIN "script" on "script"."id" = "guess"."script_id"
    WHERE "script"."id" = $1 AND "guess"."id" = $2;`;
    const getAppearanceScriptValuesQuery = `SELECT "first_appearance", "second_appearance",
    "third_appearance", "fourth_appearance", "fifth_appearance", "sixth_appearance" FROM "guess" 
    JOIN "script" on "script"."id" = "guess"."script_id"
    WHERE "script"."id" = $1 AND "guess"."id" = $2;`;

    const actorGuessQuery = await pool.query(getActorGuessScoreQuery, [guessData.script_id, req.params.id]);
    const actorScriptValuesQuery = await pool.query(getActorScriptValuesQuery, [guessData.script_id, req.params.id]);
    const appearanceGuessQuery = await pool.query(getAppearanceGuessScoreQuery, [guessData.script_id, req.params.id]);
    const appearanceScriptValuesQuery = await pool.query(getAppearanceScriptValuesQuery, [guessData.script_id, req.params.id]);

    const actorGuesses = Object.values(actorGuessQuery.rows[0]);
    const actorScriptValues = Object.values(actorScriptValuesQuery.rows[0]);
    const appearanceGuesses = Object.values(appearanceGuessQuery.rows[0]);
    const appearanceScriptValues = Object.values(appearanceScriptValuesQuery.rows[0]);

    let score = 0;
    for (let i = 0; i < appearanceGuesses.length; i++) {

      if (i < 6 && appearanceGuesses[i] === appearanceScriptValues[i] && actorGuesses[i] === actorScriptValues[i]) {
        score += 2;
      } else if (i === 6 && appearanceGuesses[i] === appearanceScriptValues[i]) {
        score += 2;
      }

    }

    if (actorGuesses.join(', ') === actorScriptValues.join(', ') && appearanceGuesses.join(', ') === appearanceScriptValues.join(', ')) {
      score += 5;
    }

    const updateScoreQuery = `UPDATE "guess" SET "points" = $1 WHERE "id" = $2;`;
    await pool.query(updateScoreQuery, [score, req.params.id]);

    res.sendStatus(201);
  } catch (error) {
    console.log('Error submitting guess', error);
    res.sendStatus(500);
  }

});

module.exports = router;