const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {

    // Info to GET from game table
    // ! May need to adjust req.params.id

    let queryText = 

    `SELECT "game"."id",
	   "player_one_id", "user1"."first_name" as "player_one_first_name",
	   "player_two_id", "user"."first_name" as "player_two_first_name", 
	   "is_ongoing", "active_respondent_id", "active_scene", "winner_id", 
	   to_char("game"."date_created", 'MM-dd-yy') AS "date_created" , "code"
	 
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
const generateGameLink = () => {
    const length = 4;
    let otp = "";

    for(let i = 0; i < length; i++){
        otp += Math.floor(Math.random() * 10 );
    }
    return otp;
}
/**
 * POST route template
 */
router.post('/', (req, res) => {
    // Info to POST to game table
    let code = generateGameLink()
    let queryText = `INSERT INTO "game" ("player_one_id", "active_scene","code") VALUES ($1, $2, $3);`;
    pool.query(queryText, [req.user.id, 1, code])
        .then((result) => {
            res.status(201).send({code: code});
        })
        .catch((error) => {
            console.log('Error in game.router POST', error);
            res.sendStatus(500);
        });
});

module.exports = router;