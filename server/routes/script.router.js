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

router.get('/', (req, res) => {
  // GET route code here
});

module.exports = router;