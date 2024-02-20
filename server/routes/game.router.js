const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {

    // Info to GET from game table
    // ! May need to adjust req.params.id
    let queryText = `SELECT "winner_id", "date_created", "code" FROM "game" WHERE "player_one_id" = $1;`;
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