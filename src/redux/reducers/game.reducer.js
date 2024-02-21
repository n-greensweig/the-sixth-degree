const gameReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_GAME':
        return action.payload;
      case 'UNSET_GAME':
        return [];
      default:
        return state;
    }
  };
  
  // game will be on the redux state at:
  // state.game
  export default gameReducer;