import { AUTH_TYPES } from 'redux/types/auth';
import { CREDITS_TYPES } from 'redux/types/credits';

const initialState = {
	loaded: false,
	total: 0,
	list: [],
};

export const credits = (state = initialState, action) => {
	switch (action.type) {
		case CREDITS_TYPES.LOAD_CREDITS:
			return {
				...state,
				loaded: true,
				list: action.list,
				total: action.total,
			};
		case AUTH_TYPES.LOGOUT:
			return initialState;
		default:
			return state;
	}
};
