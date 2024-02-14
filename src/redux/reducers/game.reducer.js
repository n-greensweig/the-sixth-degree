const gameReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_GAME':
        console.log(action.payload);
        return action.payload;
      case 'UNSET_GAME':
        return {};
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default gameReducer;  