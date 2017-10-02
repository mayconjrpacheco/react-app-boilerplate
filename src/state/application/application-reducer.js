import { CHANGE_TITLE } from './application-actions';

const initialState = {
	title: ''
};

function applicationReducer(state = initialState, action) {
	switch(action.type) {
		case CHANGE_TITLE:
			return Object.assign({}, state, {
				title: action.text
			});

		default:
			return state;
	}
}

export default applicationReducer;