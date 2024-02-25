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
    console.log('hey', guessData);

    // const getScoreQuery = `
    // SELECT "first_actor", "first_appearance", "second_actor", "second_appearance", "third_actor", "third_appearance", "fourth_actor", 
    // "fourth_appearance", "fifth_actor", "fifth_appearance", "sixth_actor", "sixth_appearance", "seventh_actor" FROM "script" WHERE "id" = $1;`;

    const getGuessScoreQuery = `SELECT "first_actor_guess", "first_appearance_guess", "script"."first_actor", "script"."first_appearance" FROM "guess"
    JOIN "script" on "script"."id" = "guess"."script_id"
    WHERE "script"."id" = $1 AND "guess"."id" = $2;`;

    const scoredFirstActor = await pool.query(getGuessScoreQuery, [guessData.script_id, req.params.id]);
    console.log('scoredFirstActor', scoredFirstActor.rows[0]);

    if (scoredFirstActor.rows[0].first_appearance_guess === scoredFirstActor.rows[0].first_appearance) {
      console.log('first appearance guess is correct');
    } else {
      console.log('first appearance guess is incorrect');
    }

    console.log('Guess submitted');
    res.sendStatus(201);
  } catch (error) {
    console.log('Error submitting guess', error);
    res.sendStatus(500);
  }

});

module.exports = router;