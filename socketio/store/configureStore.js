import Thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers/root';
import { createStore, applyMiddleware } from 'redux';

export default function configureStore(initialState) {
	const store = createStore(
		rootReducer,
		initialState,
		applyMiddleware(Thunk /*, createLogger() */)
	);

	if(module.hot) {
		// Enable Webpack hot module replacement for reducers
		module.hot.accept('../reducers', () => {
			const nextRootReducer = require('../reducers/root').default;
			store.replaceReducer(nextRootReducer);
		})
	}

	return store;
}
