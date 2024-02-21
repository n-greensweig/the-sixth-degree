const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// POST route to submit user's guess
router.post('/:id', (req, res) => {

  const guess = req.body.guess;

  const queryText = `
  INSERT INTO "guess" (
    "guesser_id",
    "script_id",
    "game_id",
    "first_actor_guess",
    "first_appearance_guess",
    "second_actor_guess",
    "second_appearance_guess",
    "third_actor_guess",
    "third_appearance_guess",
    "fourth_actor_guess",
    "fourth_appearance_guess",
    "fifth_actor_guess",
    "fifth_appearance_guess",
    "sixth_actor_guess",
    "sixth_appearance_guess",
    "seventh_actor_guess",
    "is_complete"
  )
VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17); 
  `;
  pool.query(queryText, [
    req.user.id, req.params.id, req.params.id, guess.first_actor, guess.first_appearance,
    guess.second_actor, guess.second_appearance, guess.third_actor, guess.third_appearance,
    guess.fourth_actor, guess.fourth_appearance, guess.fifth_actor, guess.fifth_appearance,
    guess.sixth_actor, guess.sixth_appearance, guess.seventh_actor, true
  ])
    .then(() => {
      console.log('Guess submitted');
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log('Error submitting guess', error);
      res.sendStatus(500);
    });

});

// POST route to submit user's guess
router.post('/:id', (req, res) => {

  const guess = req.body.guess;

  const queryText = `
  INSERT INTO "guess" (
    "script_id",
    "game_id",
    "first_actor_guess",
    "seventh_actor_guess",
  )
VALUES ($1, $2, $3, $4); 
  `;
  pool.query(queryText, [
    guess.first_actor, guess.seventh_actor
  ])
    .then(() => {
      console.log('Guess submitted');
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log('Error submitting guess', error);
      res.sendStatus(500);
    });

});

// POST route to save user's guess without submitting
// Perhaps should be a PUT request instead to allow for multiple saves?
router.post('/save/:id', (req, res) => {

  const guess = req.body.guess;

  const queryText = `
  INSERT INTO "guess" (
    "guesser_id",
    "script_id",
    "game_id",
    "first_actor_guess",
    "first_appearance_guess",
    "second_actor_guess",
    "second_appearance_guess",
    "third_actor_guess",
    "third_appearance_guess",
    "fourth_actor_guess",
    "fourth_appearance_guess",
    "fifth_actor_guess",
    "fifth_appearance_guess",
    "sixth_actor_guess",
    "sixth_appearance_guess",
    "seventh_actor_guess"
  )
VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16); 
  `;
  pool.query(queryText, [
    req.user.id, req.params.id, req.params.id, guess.first_actor, guess.first_appearance,
    guess.second_actor, guess.second_appearance, guess.third_actor, guess.third_appearance,
    guess.fourth_actor, guess.fourth_appearance, guess.fifth_actor, guess.fifth_appearance,
    guess.sixth_actor, guess.sixth_appearance, guess.seventh_actor
  ])
    .then(() => {
      console.log('Guess submitted');
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log('Error submitting guess', error);
      res.sendStatus(500);
    });

});

module.exports = router;