import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import scoreReducer from './scores/scoreReducer' 

const rootReducer = combineReducers({
    form: formReducer,
    abilityscores: scoreReducer
})

export default rootReducer;