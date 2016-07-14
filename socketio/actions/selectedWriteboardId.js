import { actions } from '../utilities';

export function setSelectedWriteboardId(data) {
	return {
		type: actions.SET_SELECTED_WRITEBOARD_ID,
		data
	};
}
