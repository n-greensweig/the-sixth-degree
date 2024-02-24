const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET route to retrieve all games for the logged in user
router.get('/', (req, res) => {

    // Info to GET from game table
    let queryText =

        `SELECT "game"."id",
        "player_one_id", "user1"."first_name" as "player_one_first_name",
        "player_two_id", "user"."first_name" as "player_two_first_name", 
        "is_ongoing", "active_scene", "winner_id", 
        to_char("game"."date_created", 'MM-dd-yy') AS "date_created" , "code",
        (SELECT COUNT(*) FROM "guess" WHERE "game"."id" = "guess"."game_id" AND "guesser_id" = $1 AND "is_complete" = false) as "my_active_scripts",
        (SELECT COUNT(*) FROM "guess" WHERE "game"."id" = "guess"."game_id" AND "guesser_id" != $1 AND "is_complete" = false) as "their_active_scripts"
      
      FROM "game"
      
      INNER JOIN "user" as "user1" on "user1"."id" = "game"."player_one_id"
      INNER JOIN "user" on "user"."id" = "game"."player_two_id"
     
      WHERE "player_one_id" = $1 OR "player_two_id" = $1;`;



    pool.query(queryText, [req.user.id])
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log('Error in game.router GET', error);
            res.sendStatus(500);
        });

});

// GET route to retrieve the selected scripts for a game
// on the game code page
router.get('/active-scripts', (req, res) => {
    
    // Use req.query to access query parameters
    let gameCode = req.query.code;

    let queryText = `
        SELECT "first_actor", "seventh_actor" FROM "script"
        JOIN "guess" ON "guess"."script_id" = "script"."id"
        WHERE "guess"."code" = $1;`;

    pool.query(queryText, [gameCode]) // Pass gameCode as parameter to the query
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log('Error in active-scripts GET with game code', gameCode, ':', error);
            res.sendStatus(500);
        });
});

// Generate a random 4-digit number to use as a game code
const generateGameLink = () => {
    const length = 4;
    let otp = "";

    for (let i = 0; i < length; i++) {
        otp += Math.floor(Math.random() * 10);
    }
    return otp;
}

// POST route to create a new game
router.post('/', async (req, res) => {
    try {
        // Info to POST to game table
        let code = generateGameLink();
        let selectedScripts = req.body; // Assuming this is an array of script IDs. Adjust if necessary.
        let queryText = `INSERT INTO "game" ("player_one_id", "active_scene", "code")
            VALUES ($1, $2, $3)
            RETURNING "id";`; // This will return the newly inserted game's ID

        // Execute the query to insert a new game and retrieve its id
        const gameInsertResult = await pool.query(queryText, [req.user.id, 1, code]);
        const gameId = gameInsertResult.rows[0].id; // Correctly extracting the id from the result

        let firstGuessQueryText = `
            INSERT INTO "guess" ("script_id", "game_id", "first_actor_guess", "seventh_actor_guess", "code")
            VALUES ($1, $2, $3, $4, $5);`;
        let scriptValuesQueryText = `
            SELECT "first_actor", "seventh_actor" FROM "script" WHERE "id" = $1;`;

        // Assuming selectedScripts is an array of script IDs. Adjust your loop based on the actual data structure
        for (const scriptId of selectedScripts) {
            // Fetch the first_actor and seventh_actor based on scriptId
            const scriptResult = await pool.query(scriptValuesQueryText, [scriptId]);
            const { first_actor, seventh_actor } = scriptResult.rows[0];
        
            // Now inserting with the correct values for first_actor_guess and seventh_actor_guess
            await pool.query(firstGuessQueryText, [scriptId, gameId, first_actor, seventh_actor, code]);
        }

        // Send back the game link code as a response
        res.status(201).send({ code: code });
    } catch (error) {
        console.log('Error in game.router POST', error);
        res.sendStatus(500);
    }
});

// PUT route to update the game table with the second player's id
router.put('/join', (req, res) => {

    let queryText = `UPDATE "game" SET "player_two_id" = $1 WHERE "code" = $2;`;

    pool.query(queryText, [req.user.id, req.body.gameId])
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('Error in game.router PUT', error);
            res.sendStatus(500);
        });
}
);

// PUT route to update the guess table with the guesser's id
router.put('/guesser-update', (req, res) => {

    let queryText = `UPDATE "guess" SET "guesser_id" = $1 WHERE "code" = $2 AND "guesser_id" IS NULL;`;

    pool.query(queryText, [req.user.id, req.body.gameId])
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('Error in game.router PUT', error);
            res.sendStatus(500);
        });
}
);

module.exports = router;