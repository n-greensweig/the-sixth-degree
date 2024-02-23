const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// PUT route to submit user's guess
router.put('/:id', (req, res) => {
  const guess = req.body;
  console.log(guess);

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

  pool.query(queryText, [
    guess.first_actor, guess.first_appearance_guess,
    guess.second_actor_guess, guess.second_appearance_guess, guess.third_actor_guess, guess.third_appearance_guess,
    guess.fourth_actor_guess, guess.fourth_appearance_guess, guess.fifth_actor_guess, guess.fifth_appearance_guess,
    guess.sixth_actor_guess, guess.sixth_appearance_guess, guess.seventh_actor, guess.complete, req.params.id, req.user.id
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