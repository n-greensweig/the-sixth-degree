const scriptReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_SCRIPTS':
            return action.payload;
        case 'GET_ACTIVE_SCRIPT':
            return action.payload;
        default:
            return state;
    }
};

// scripts will be on the redux state at:
// store.script
export default scriptReducer;