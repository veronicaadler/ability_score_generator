const initState = {
    score: []
}

const scoreReducer = (state = initState, action) => {
    switch(action.type) {
        case 'createStore': return {
            ...state,
            score: action.payload
        }
        default: return state;
    }
}

export default scoreReducer;