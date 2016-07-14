import { actions } from '../utilities';

export default function filters(state = { title: '', archived: '' }, action) {
	switch(action.type) {
        case actions.SET_FILTERS:
            return action.data.filters;
        default:
            return state;
    }
}
