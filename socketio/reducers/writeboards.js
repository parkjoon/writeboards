import { actions } from '../utilities';

export default function writeboards(state = [], action) {
    switch(action.type.writeboard) {
        case actions.ADD_WRITEBOARD:
			return [
				...state,
				{
					id: action.data.writeboard.id,
	                title: action.data.writeboard.title,
					content: action.data.writeboard.content,
	                archived: action.data.writeboard.archived
				}
			];
		case actions.EDIT_WRITEBOARD:
			var writeboards = [...state];
			for(var writeboard of writeboards) {
				if(writeboard.id == action.data.writeboard.id) {
					writeboard.title = action.data.writeboard.title;
					writeboard.content = action.data.writeboard.content;
					writeboard.archived = action.data.writeboard.archived;
					break;
				}
			}
			return writeboards;
		case actions.ARCHIVE_WRITEBOARD:
			var writeboards = [...state];
			for(var writeboard of writeboards) {
				if(writeboard.id == action.data.writeboard.id) {
					writeboard.archived = action.data.writeboard.archived;
					break;
				}
			}
			return writeboards;
        default:
            return state;
    }
};
