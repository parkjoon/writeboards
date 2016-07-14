import { actions } from '../utilities';

export function addConnection(data) {
	return {
		type: actions.ADD_CONNECTION,
		data
	};
}

export function removeConnection(data) {
	return {
		type: actions.REMOVE_CONNECTION,
		data
	};
}
