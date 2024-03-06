# The Sixth Degree: A Full-stack Movie Game

## Table of Contents
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Built With](#Built-With)
- [Acknowledgments](#Acknowledgments)

## Description
The Sixth Degree is a digital version of the game 'The Six Degrees of Kevin Bacon'. The app allows two users to play the game against one another and has a scoring system to identify winners and losers of a challenge. The app is built with React, Redux, Node.js, PostgreSQL, and the Movie Database Project's API. Users save scripts (cards to play against one another) and challenge one another to see who can create the closest links between actors and movies.

## Screenshot
<img width="1000" alt="home" src="https://github.com/n-greensweig/the-sixth-degree/assets/129970968/fb02a2dc-c5d4-40cc-971f-7288d7f1db3c" />

## Installation
1. Create a database named ```the_sixth_degree```
2. Fork and clone this repository
3. The queries in the database.sql file are set up to create all necessary tables and populate the needed data to allow the app to run correctly. The project is built on PostgreSQL, so you will need to have PostgreSQL installed for the app to work. We recommend using Postico to run those queries as that was used to create the queries.
4. Open up your editor of choice and run an ```npm install```
5. Run ```npm run server``` in your terminal
6. Run ```npm run client``` in your terminal
7. The ```npm run client``` command will open up a new browser tab for you

## Usage
After starting the application:
1. Register a new account for the app
2. Create three new scripts
3. Create a new game and send a friend the access code to start a new game

## Built With
1. React.js - Frontend framework.
2. Redux - State management.
3. Node.js - Backend server.
4. Express - Server framework.
5. PostgreSQL - Database management.
6. The Movie Database Project - third-party API.

## Acknowledgments
Thank you to Adam Arends and the Prime Academy staff for supporting us throughout this project.
