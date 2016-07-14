import Server from 'socket.io';
import configureStore from './store/configureStore';
import { actions, isSameConnection } from './utilities';
import { addWriteboardInCF, editWriteboardInCF, archiveWriteboardInCF } from './api';
import { addConnection, removeConnection, setSelectedWriteboardId, setFilters, addWriteboard, editWriteboard, archiveWriteboard } from './actions/connections';


const io = new Server().attach(8080);
const store = configureStore(require('./store/initialStore.json'));

// When the client opens up a new socket.
io.on('connection', (socket) => {
	// Add the client's state to the store using default values.
	store.dispatch(addConnection({ id: socket.id }));

	socket.on(actions.SET_SELECTED_WRITEBOARD_ID, (data) => {
		console.log('SOCKET SERVER: recieved event: SET_SELECTED_WRITEBOARD_ID: with data: ', data);

		store.dispatch(setSelectedWriteboardId({
			...data,
			id: connection.id
		}));
	});

	socket.on(actions.SET_FILTERS, (data) => {
		console.log('SOCKET SERVER: recieved event: SET_FILTERS: with data: ', data);

		store.dispatch(setFilters({
			...data,
			id: connection.id
		}));
	});

	socket.on(actions.ADD_WRITEBOARD, (data) => {
		console.log('SOCKET SERVER: recieved event: ADD_WRITEBOARD: with data: ', data);

		addWriteboardInCF(data).then((res) => {
			if(res.status != '200') { return }

			for(connection of store.getState().connections) {
				store.dispatch(addWriteboard({
					writeboard: {
						...data.writeboard,
						id: res.data.writeboard_ID
					},
					id: connection.id
				}));
				if(true /* apply filters here */) {
					io.to(connection.id).emit(actions.SET_STATE, connection);
				}
			}
		});
	});

	socket.on(actions.EDIT_WRITEBOARD, (data) => {
		console.log('SOCKET SERVER: recieved event: EDIT_WRITEBOARD: with data: ', data);

		editWriteboardInCF(data).then((res) => {
			if(res.status != '200') { return }

			for(connection of store.getState().connections) {
				store.dispatch(editWriteboard({
					...data,
					id: connection.id
				}));
				if(true /* apply filters here */) {
					io.to(connection.id).emit(actions.SET_STATE, connection);
				}
			}
		});
	});

	socket.on(actions.ARCHIVE_WRITEBOARD, (data) => {
		console.log('SOCKET SERVER: recieved event: ARCHIVE_WRITEBOARD: with data: ', data);

		archiveWriteboardInCF(data).then((res) => {
			if(res.status != '200') { return }

			for(connection of store.getState().connections) {
				store.dispatch(archiveWriteboard({
					...data,
					id: connection.id
				}));
				if(true /* apply filters here */) {
					io.to(connection.id).emit(actions.SET_STATE, connection);
				}
			}
		});
	});

	// When the socket is closed for any reason, remove its corresponding
	// state in the store.
	socket.on('disconnnect', () => {
		store.dispatch(removeConnection({ id: socket.id }));
	});
});
