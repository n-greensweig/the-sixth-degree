import React, { useEffect, useState } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import Nav from '../Nav/Nav';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { TextField, Button, Grid, Container, Card, CardContent, Paper, Box } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import FormControl from '@mui/material/FormControl';
import './UserPage.css';


function UserPage() {

  const [gameId, setGameId] = useState(null);

  // added for CreateGame button
  const history = useHistory();

  const handleClick = () => {
    history.push('/new-game');
  }

  const user = useSelector((store) => store.user);
  const games = useSelector((store) => store.gameReducer);
  const dispatch = useDispatch();


  const joinGame = e => {
    e.preventDefault();
    console.log("in joinGame");
    dispatch({ type: 'JOIN_GAME', payload: { gameId: gameId } });
    dispatch({ type: 'UPDATE_GUESSER', payload: { gameId: gameId } });
  };


  const sendScriptsBack = (id, code, guesser) => {
    console.log(guesser);
    history.push(`/send-scripts/${id}/${code}/${guesser}`);
  };

  const playScripts = id => {
    console.log("in playScripts");
    // Routes to ActiveGame page
    history.push(`/active-game/${id}`);
  };

  useEffect(() => {
    dispatch({ type: 'FETCH_GAME', payload: user.id });
  }, []);

  return (
    <div>
      <Box>
        <Nav></Nav>

        <Grid>
          <Container >
            <h1 id="welcome-line">Welcome, {user.first_name}!</h1>

            <form onSubmit={e => joinGame(e)}>
              <TextField
                id="access-code-textfield"
                required
                name="access_code"
                placeholder="Access Code"
                variant="outlined"
                sx={{
                  width: '40%',
                  padding: '1%',
                  marginLeft: '5%'
                }}
                onChange={(event) => setGameId(event.target.value)}
              />
              <Button
                variant='outlined'
                type='submit'
                sx={{
                  padding: 1,
                  marginLeft: '11%',
                  border: '2px black solid',
                  color: 'black',
                }}
              >Join Game</Button>
            </form>


            <Button
              variant='outlined'
              onClick={handleClick}
              sx={{
                float: 'right',
                height: '50px',
                marginTop: '30px',
                marginRight: '5%',
                border: '2px black solid',
                color: 'black',
              }}
            >Create Game</Button>



            <h2 id="nowplaying-line">NOW PLAYING:</h2>

            {games.length > 0 ?
              <div>
                <h2>Actor</h2>
                {games.map(game => {
                  if (game.is_ongoing && game.player_two_id === user.id) {
                    return (
                      <>
                        <Card key={game.id} className='card'>
                          <CardContent>
                            <h4>game ID: {game.id}</h4>
                            <h4>My Active Script Count: {game.my_active_scripts}</h4>
                            <h4>Other Player Active Script Count: {game.their_active_scripts}</h4>
                            <h4>TITLE: {game.my_active_scripts}</h4>
                            <h4>STARRING: {game.player_one_first_name} & {game.player_two_first_name}</h4>
                            <h4>SCENE: {game.active_scene}</h4>
                            {game.active_scene > 1 ?
                              <div>
                                <h4>SCORE: shows up when you're on scene 2</h4>
                              </div>

                              :

                              <div>
                              </div>
                            }
                            <h4>STATUS: You're wanted on set!</h4>
                            <Button variant='outlined'
                              onClick={() => sendScriptsBack(game.id, game.code, user.id === game.player_one_id ? game.player_two_id : game.player_one_id)}
                              sx={{
                                marginTop: '15px',
                                marginRight: '10px',
                                border: '2px black solid',
                                color: 'black',
                              }}
                            >send scripts back</Button>

                            <Button variant='outlined'
                              onClick={id => playScripts(game.id)}
                              sx={{
                                marginTop: '15px',
                                border: '2px black solid',
                                color: 'black',
                              }}
                            >Play</Button>
                          </CardContent>
                        </Card>
                      </>
                    )
                  }
                })}

                <h2>Director</h2>
                {games.map(game => {
                  if (game.is_ongoing && game.player_two_id !== user.id) {
                    return (
                      <>
                        <Card key={game.id} className='card'>
                          <CardContent>
                            <h4>game ID: {game.id}</h4>
                            <h4>TITLE: Cruz-Stone</h4>
                            <h4>STARRING: {game.player_one_first_name} & {game.player_two_first_name}</h4>
                            <h4>SCENE: {game.active_scene}</h4>
                            {game.active_scene > 1 ?
                              <div>
                                <h4>SCORE: shows up when you're on scene 2</h4>
                              </div>

                              :

                              <div>
                              </div>
                            }
                            <h4>STATUS: Waiting for your actor...</h4>
                          </CardContent>
                        </Card>
                      </>
                    )
                  }
                })}
              </div>

              :

              <div>
                <h3 id="no-games">No games to display!</h3>
              </div>
            }






            <h2 id="filmography-line">FILMOGRAPHY:</h2>
            {games.length === 0 ?
              <div>
                <h4>No game history yet!</h4>
              </div>

              :

              <div>
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Release Date</TableCell>
                        <TableCell>Starring</TableCell>
                        <TableCell>Best Actor</TableCell>
                        <TableCell>Score</TableCell>
                      </TableRow>
                    </TableHead>

                    <TableBody>
                      {games.map((game) => {
                        if (!game.is_ongoing) {
                          return (
                            <TableRow key={game.id}>
                              <TableCell>id of {game.id}, {game.date_created}</TableCell>
                              <TableCell>{game.player_one_first_name} & {game.player_two_first_name}</TableCell>
                              <TableCell>{game.winner_id}</TableCell>
                              <TableCell>score</TableCell>
                            </TableRow>
                          )
                        }
                      })}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            }
            {/* ^^ this isn't working quite as expected.... I still want the Filmography: no game history yet! to show up if all the games
    you are in are active */}
          </Container>
        </Grid>
      </Box>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;