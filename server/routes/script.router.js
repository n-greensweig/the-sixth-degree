const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */

/* Information to display on UserPage:
1. Game cards where it's your turn:
    1. Game title (first and seventh actor names)
    2. Users starring
    3. Scene number
    4. Guess points
    5. Game status
*/
/*
2. Filmography:1. game date_created
2. game player_one_id and player one's user first_name and player_two_id 
   and player two's user first_name
3. Game winner_id and user first_name
4. Guess points
*/

// GET all scripts for /new-game view
router.get('/', (req, res) => {
  const queryText = `
  SELECT "first_actor", "seventh_actor" FROM "script" WHERE "script_creator_id" = $1;
  `;
  pool.query(queryText, [req.user.id])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log('Error getting scripts', error);
      res.sendStatus(500);
    });
});

module.exports = router;