-- User table
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "email" VARCHAR(120) UNIQUE,
	"first_name" VARCHAR(120),
	"last_name" VARCHAR(120),
	"full_name" VARCHAR(120),
	"password" VARCHAR(1000),
	"date_created" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Game table
CREATE TABLE "game" (
	"id" SERIAL PRIMARY KEY,
	"player_one_id" INTEGER REFERENCES "user",
	"player_two_id" INTEGER REFERENCES "user" DEFAULT NULL,
	"is_ongoing" BOOLEAN DEFAULT TRUE,
	"active_respondent_id" INTEGER REFERENCES "user",
	"active_scene" INTEGER,
	"is_paused" BOOLEAN DEFAULT FALSE,
	"is_complete" BOOLEAN DEFAULT FALSE,
	"winner_id" INTEGER REFERENCES "user" DEFAULT NULL,
	"perfect_match" BOOLEAN DEFAULT NULL,
	"valid_path" BOOLEAN DEFAULT NULL,
	"player_one_challenge_used" BOOLEAN DEFAULT FALSE,
	"player_one_challenge_successful" BOOLEAN DEFAULT NULL,
	"player_one_first_hint_used" BOOLEAN DEFAULT FALSE,
	"player_one_second_hint_used" BOOLEAN DEFAULT FALSE,
	"player_one_first_next_credit_used" BOOLEAN DEFAULT FALSE,
	"player_one_second_next_credit_used" BOOLEAN DEFAULT FALSE,
	"player_one_lookup_used" BOOLEAN DEFAULT FALSE,
	"player_one_phone_used" BOOLEAN DEFAULT FALSE,
	"player_one_ask_stranger_used" BOOLEAN DEFAULT FALSE,
	"player_two_challenge_used" BOOLEAN DEFAULT FALSE,
	"player_two_challenge_successful" BOOLEAN DEFAULT NULL,
	"player_two_first_hint_used" BOOLEAN DEFAULT FALSE,
	"player_two_second_hint_used" BOOLEAN DEFAULT FALSE,
	"player_two_first_next_credit_used" BOOLEAN DEFAULT FALSE,
	"player_two_second_next_credit_used" BOOLEAN DEFAULT FALSE,
	"player_two_lookup_used" BOOLEAN DEFAULT FALSE,
	"player_two_phone_used" BOOLEAN DEFAULT FALSE,
	"player_two_ask_stranger_used" BOOLEAN DEFAULT FALSE,
	"date_created" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Guess table
CREATE TABLE "guess" (
	"id" SERIAL PRIMARY KEY,
	"guesser_id" INTEGER REFERENCES "user",
	"script_id" INTEGER REFERENCES "script" DEFAULT NULL,
	"game_id" INTEGER REFERENCES "game" DEFAULT NULL,
	"first_actor_guess" VARCHAR(256) DEFAULT NULL,
	"first_appearance_guess" VARCHAR(256) DEFAULT NULL,
	"second_actor_guess" VARCHAR(256) DEFAULT NULL,
	"second_appearance_guess" VARCHAR(256) DEFAULT NULL,
	"third_actor_guess" VARCHAR(256) DEFAULT NULL,
	"third_appearance_guess" VARCHAR(256) DEFAULT NULL,
	"fourth_actor_guess" VARCHAR(256) DEFAULT NULL,
	"fourth_appearance_guess" VARCHAR(256) DEFAULT NULL,
	"fifth_actor_guess" VARCHAR(256) DEFAULT NULL,
	"fifth_appearance_guess" VARCHAR(256) DEFAULT NULL,
	"sixth_actor_guess" VARCHAR(256) DEFAULT NULL,
	"sixth_appearance_guess" VARCHAR(256) DEFAULT NULL,
	"points" INTEGER DEFAULT 0,
	"scene_number" INTEGER DEFAULT NULL,
	"is_complete" BOOLEAN DEFAULT FALSE,
	"date_created" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Script table
CREATE TABLE "script" (
	"id" SERIAL PRIMARY KEY,
	"script_creator_id" INTEGER REFERENCES "user",
	"first_actor" VARCHAR(256) DEFAULT NULL,
	"first_appearance" VARCHAR(256) DEFAULT NULL,
	"second_actor" VARCHAR(256) DEFAULT NULL,
	"second_appearance" VARCHAR(256) DEFAULT NULL,
	"third_actor" VARCHAR(256) DEFAULT NULL,
	"third_appearance" VARCHAR(256) DEFAULT NULL,
	"fourth_actor" VARCHAR(256) DEFAULT NULL,
	"fourth_appearance" VARCHAR(256) DEFAULT NULL,
	"fifth_actor" VARCHAR(256) DEFAULT NULL,
	"fifth_appearance" VARCHAR(256) DEFAULT NULL,
	"sixth_actor" VARCHAR(256) DEFAULT NULL,
	"sixth_appearance" VARCHAR(256) DEFAULT NULL,
	"first_genre" VARCHAR(256) DEFAULT NULL,
	"first_decade" VARCHAR(256) DEFAULT NULL,
	"second_genre" VARCHAR(256) DEFAULT NULL,
	"secon_decade" VARCHAR(256) DEFAULT NULL,
	"third_genre" VARCHAR(256) DEFAULT NULL,
	"third_decade" VARCHAR(256) DEFAULT NULL,
	"fourth_genre" VARCHAR(256) DEFAULT NULL,
	"fourth_decade" VARCHAR(256) DEFAULT NULL,
	"fifth_genre" VARCHAR(256) DEFAULT NULL,
	"fifth_decade" VARCHAR(256) DEFAULT NULL,
	"sixth_genre" VARCHAR(256) DEFAULT NULL,
	"sixth_decade" VARCHAR(256) DEFAULT NULL,
	"date_created" TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);