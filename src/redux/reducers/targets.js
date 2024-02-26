import { AUTH_TYPES } from 'redux/types/auth';
import { TARGETS_TYPES } from 'redux/types/targets';

const initialState = {
	loaded: false,
	total: 0,
	list: [],
};

export const targets = (state = initialState, action) => {
	switch (action.type) {
		case TARGETS_TYPES.LOAD_TARGETS:
			return {
				...state,
				loaded: true,
				list: action.list,
				total: action.total,
			};
		case TARGETS_TYPES.CREATE_TARGET:
			return {
				...state,
				list: state.list.concat(action.data),
			};
		case TARGETS_TYPES.EDIT_TARGET:
			const editedStatusIndex = state.list.findIndex(
				status => status.id === action.data.id
			);

			return {
				...state,
				list: [
					...state.list.slice(0, editedStatusIndex),
					action.data,
					...state.list.slice(editedStatusIndex + 1),
				],
			};
		case TARGETS_TYPES.DELETE_TARGET:
			return {
				...state,
				list: state.list.filter(
					status => !action.data.includes(status.id)
				),
			};
		case AUTH_TYPES.LOGOUT:
			return initialState;
		default:
			return state;
	}
};
