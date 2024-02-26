import { AUTH_TYPES } from 'redux/types/auth';
import { MEASUREMENT_UNITS_TYPES } from 'redux/types/measurementUnits';

const initialState = {
	loaded: false,
	total: 0,
	list: [],
};

export const measurementUnits = (
	state = initialState,
	action
) => {
	switch (action.type) {
		case MEASUREMENT_UNITS_TYPES.LOAD_MEASUREMENT_UNITS:
			return {
				...state,
				loaded: true,
				list: action.list,
				total: action.total,
			};
		case MEASUREMENT_UNITS_TYPES.CREATE_MEASUREMENT_UNIT:
			return {
				...state,
				list: state.list.concat(action.data),
			};
		case MEASUREMENT_UNITS_TYPES.EDIT_MEASUREMENT_UNIT:
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
		case MEASUREMENT_UNITS_TYPES.DELETE_MEASUREMENT_UNIT:
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
