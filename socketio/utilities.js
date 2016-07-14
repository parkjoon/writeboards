// All actions used on this server.
export const actions = {
	SET_STATE: 'SET_STATE',
	ADD_CONNECTION: 'ADD_CONNECTION',
	REMOVE_CONNECTION: 'REMOVE_CONNECTION',
	SET_SELECTED_WRITEBOARD_ID: 'SET_SELECTED_WRITEBOARD_ID',
	SET_FILTERS: 'SET_FILTERS',
	ADD_WRITEBOARD: 'ADD_WRITEBOARD',
	EDIT_WRITEBOARD: 'EDIT_WRITEBOARD',
	ARCHIVE_WRITEBOARD: 'ARCHIVE_WRITEBOARD'
};

// Takes in response from the server for an array of "writeboards" and converts
// the field names to the corresponding names used in the application.
export function parseWriteboards(rawWriteboards) {
	return rawWriteboards.map((writeboard) => {
		return {
			id: writeboard.writeboard_ID,
			title: writeboard.title,
			content: writeboard.content,
			archived: writeboard.deleted
		};
	});
}

// A helper function to return true or false depending on if the given
// connection has the same id as the specified id. Generally used as a
// comparison operator in array operations.
export function isSameConnection(id, connection) {
	return id == connection.id;
}
