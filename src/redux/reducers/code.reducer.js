const code = (state = 0, action) => {
    switch (action.type) {
      case 'SET_GAME_CODE':
        return action.payload;
      case 'UNSET_GAME':
        return 0;
      default:
        return state;
    }
  };
  
  // game will be on the redux state at:
  // state.game
  export default code;