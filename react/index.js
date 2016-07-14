import 'babel-polyfill';
import React from 'react';
import App from './components/App';
import configureStore from './store/configureStore';
import io from 'socket.io-client';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

const socket = io(`${location.protocol}//${location.hostname}:8080`);
const store = configureStore(require('./store/defaultState.json'));

render(
	<Provider store={store}>
		<App socket={socket} />
	</Provider>,
	document.getElementById('root')
);
