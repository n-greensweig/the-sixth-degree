// import React, { useEffect } from 'react';
// import LogOutButton from '../LogOutButton/LogOutButton';
// import { useHistory } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { TextField, Button, Grid, Container, Card, CardContent, Paper, Box } from "@mui/material";
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import FormControl from '@mui/material/FormControl';


// function UserPage() {

//   // added for CreateGame button
//   const history = useHistory();
//   const handleClick = () => {
//     history.push('/new-game');
//   }

//   const user = useSelector((store) => store.user);
//   const games = useSelector((store) => store.gameReducer);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch({ type: 'FETCH_GAME', payload: user.id });
//   }, []);

  

//   return (
//     <div className="container">
//       <LogOutButton>log out</LogOutButton>
//       <h1>Welcome, {user.first_name}!</h1>
//       <p>Your ID is: {user.id}</p>

    


//       <Button
//         variant='outlined'
//         onClick={handleClick}
//         >Create Game</Button>
      

//       <h2>Now Playing:</h2>

//       {games.length > 0 ?
//         <div>
//           {games.map(game => {
//               if (game.is_ongoing && game.active_respondent_id === user.id) {
//                 return (
//                   <>
//                     {/* <h3>Actor</h3> */}
//                       <Card key={game.id}>
//                         <CardContent>
//                             <h4>game ID: {game.id}</h4>
//                             <h4>TITLE: Pitt-Jolie</h4>
//                             <h4>STARRING: {user.first_name} & Friend name based on ID</h4>
//                             <h4>SCENE: {game.active_scene}</h4>
//                             <h4>SCORE: shows up when you're on scene 2?</h4>
//                             <h4>STATUS: You're wanted on set!</h4>
//                             <Button variant='outlined'>play</Button>                 
//                         </CardContent>
//                       </Card>
//                   </>
//                 )
//               } else if (game.is_ongoing && game.active_respondent_id !== user.id) {
//                   return (
//                     <>
//                       {/* <h3>Director</h3> */}
//                         <Card key={game.id}>
//                           <CardContent>
//                               <h4>game ID: {game.id}</h4>
//                               <h4>TITLE: Pitt-Jolie</h4>
//                               <h4>STARRING: {user.first_name} & Friend name based on ID</h4>
//                               <h4>SCENE: {game.active_scene}</h4>
//                               <h4>SCORE: shows up when you're on scene 2?</h4>
//                               <h4>STATUS: Waiting for your actor...</h4>
//                               <Button variant='outlined'>play</Button>                 
//                           </CardContent>
//                         </Card>
//                     </>
//                   )
//               } 
//           })}
//         </div>

//         :

//         <div>
//             <h3 id="no-games">No games to display!</h3>
//         </div>
//       }

    

      

      

//       {games.length >= 0 ? 
//         <div>
//           {games.map(game => {
//             if (!game.is_ongoing) {
//               return (
//                 <>
//                 <h2>Filmography:</h2>
//                   <Card key={game.id}>
//                     <CardContent>
//                         <h4>game ID: {game.id}</h4>
//                         <h4>TITLE: Pitt-Jolie</h4>
//                         <h4>STARRING: {user.first_name} & Friend name based on ID</h4>
//                         <h4>SCORE: shows up when you're on scene 2?</h4>                                       
//                     </CardContent>
//                   </Card>
//                 </>
//               )
//             } 
//           })}
//         </div>

//         :

//         <div>
//           <h2>Filmography:</h2>
//           <h4>No game history yet!</h4>
//         </div>

//     }
  
//     </div>
//   );
// }

// // this allows us to use <App /> in index.js
// export default UserPage;



// ^^ this pretty much works but i'm going to refactor a bit






























import React, { useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
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


function UserPage() {

  // added for CreateGame button
  const history = useHistory();
  const handleClick = () => {
    history.push('/new-game');
  }

  const user = useSelector((store) => store.user);
  const games = useSelector((store) => store.gameReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_GAME', payload: user.id });
  }, []);

  

  return (
    <div className="container">
      <LogOutButton>log out</LogOutButton>
      <h1>Welcome, {user.first_name}!</h1>
      <p>Your ID is: {user.id}</p>

    
      <Button
        variant='outlined'
        onClick={handleClick}
        >Create Game</Button>
      

      <h2>Now Playing:</h2>

      {games.length > 0 ?
        <div>
          <h3>Actor</h3>
          {games.map(game => {
              if (game.is_ongoing && game.active_respondent_id === user.id) {
                return (
                  <>                    
                      <Card key={game.id}>
                        <CardContent>
                            <h4>game ID: {game.id}</h4>
                            <h4>TITLE: Pitt-Jolie</h4>
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
                            <Button variant='outlined'>play</Button>                 
                        </CardContent>
                      </Card>
                  </>
                )
              } 
            })}   
              
          <h3>Director</h3>
          {games.map(game => {
              if (game.is_ongoing && game.active_respondent_id !== user.id) {
                return (
                  <>  
                      <Card key={game.id}>
                        <CardContent>
                            <h4>game ID: {game.id}</h4>
                            <h4>TITLE: Pitt-Jolie</h4>
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
                            <Button variant='outlined'>view sent scripts</Button>                 
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






      <h2>Filmography:</h2>
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
                      <TableCell>Winner</TableCell>
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
  
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;