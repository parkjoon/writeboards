import { actions } from '../utilites';

export default function selectedWriteboardID(state, action) {
	switch(action.type) {
        case actions.SET_SELECTED_WRITEBOARD_ID:
            return action.data.selectedWriteboardId;
        default:
            return state;
    }
}
