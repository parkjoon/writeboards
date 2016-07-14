import state from './state';
import { combineReducers } from 'redux';

// Combine all reducers
const rootReducer = combineReducers({
    state
});

export default rootReducer;
