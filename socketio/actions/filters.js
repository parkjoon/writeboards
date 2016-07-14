import { actions } from '../utilities';

export function setFilters(data) {
	return {
		type: actions.SET_FILTERS,
		data
	};
}
