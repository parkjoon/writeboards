import connections from './connections';
import { combineReducers } from 'redux';

// Combine all reducers
const rootReducer = combineReducers({
	connections
});

export default rootReducer;
