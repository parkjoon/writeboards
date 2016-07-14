import selectedWriteboardId from './selectedWriteboardId';
import filters from './filters';
import writeboards from './writeboards';
import { actions, isSameConnection } from '../utilities';

export default function connections(state = [], action) {
	switch(action.type) {
		// CONNECTIONS
        case actions.ADD_CONNECTION:
			return [
				...state,
				{
					...require('../store/defaultConnection.json'),
					id: action.data.id
				}
			];
		case actions.REMOVE_CONNECTION:
			return state.filter(!isSameConnection.bind(null, action.data.id));

		// SELECTED WRITEBOARD ID
		case actions.SET_SELECTED_WRITEBOARD_ID:
			var connectionIndex = state.findIndex(isSameConnection.bind(null, action.data.id));
			var connection = state[connectionIndex];
			var connections = [...state];
			connections.splice(connectionIndex, 1);
			connections.push({
				...connection,
				selectedWriteboardId: selectedWriteboardId(connection.selectedWriteboardId, action)
			});
			return connections;

		// FILTERS
		case actions.SET_FILTERS:
			var connectionIndex = state.findIndex(isSameConnection.bind(null, action.data.id));
			var connection = state[connectionIndex];
			var connections = [...state];
			connections.splice(connectionIndex, 1);
			connections.push({
				...connection,
				filters: filters(connection.filters, action)
			});
			return connections;

		// WRITEBOARDS
		case actions.ADD_WRITEBOARD:
			var connectionIndex = state.findIndex(isSameConnection.bind(null, action.data.id));
			var connection = state[connectionIndex];
			var connections = [...state];
			connections.splice(connectionIndex, 1);
			connections.push({
				...connection,
				writeboards: writeboards(connection.writeboards, action)
			});
			return connections;
		case actions.EDIT_WRITEBOARD:
			var connectionIndex = state.findIndex(isSameConnection.bind(null, action.data.id));
			var connection = state[connectionIndex];
			var connections = [...state];
			connections.splice(connectionIndex, 1);
			connections.push({
				...connection,
				writeboards: writeboards(connection.writeboards, action)
			});
			return connections;
		case actions.ARCHIVE_WRITEBOARD:
			var connectionIndex = state.findIndex(isSameConnection.bind(null, action.data.id));
			var connection = state[connectionIndex];
			var connections = [...state];
			connections.splice(connectionIndex, 1);
			connections.push({
				...connection,
				writeboards: writeboards(connection.writeboards, action)
			});
			return connections;

		// DEFAULT
		default:
            return state;
    }
}
