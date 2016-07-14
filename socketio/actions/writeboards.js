import { actions } from '../utilities';

export function addWriteboard(data) {
	return {
		type: actions.ADD_WRITEBOARD,
		data
	};
}

export function editWriteboard(data) {
	return {
		type: actions.EDIT_WRITEBOARD,
		data
	};
}

export function archiveWriteboard(data) {
	return {
		type: actions.ARCHIVE_WRITEBOARD,
		data
	};
}
