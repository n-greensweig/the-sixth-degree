const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    // GET route code here

    /* Information to display on UserPage:
    1. Game cards where it's your turn:
        1. Game title (first and seventh actor names)
        2. Users starring
        3. Scene number
        4. Guess points
        5. Game status
        */
    /*
    2. Filmography:
    1. Game date_created
    2. Users starring
    3. Game winner_id and user first_name
    4. Guess points
    */

    // Info to GET from game table
    // ! May need to adjust req.params.id
    let queryText = `SELECT "winner_id", "date_created" FROM "game" WHERE "user_id" = $1
      AND "game_id" = $2;`;
    pool.query(queryText, [req.user.id, req.params.id])
        .then((result) => {
            console.log(result.rows);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log('Error in game.router GET', error);
            res.sendStatus(500);
        });




});

module.exports = router;