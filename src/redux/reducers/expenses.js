import { AUTH_TYPES } from 'redux/types/auth';
import { EXPENSES_TYPES } from 'redux/types/expenses';

const initialState = {
	loaded: false,
	total: 0,
	totalExpensesAmount: 0,
	list: [],
};

export const expenses = (state = initialState, action) => {
	switch (action.type) {
		case EXPENSES_TYPES.LOAD_EXPENSES:
			return {
				...state,
				loaded: true,
				list: action.list,
				total: action.total,
				totalExpensesAmount: action.totalExpensesAmount,
			};
		case EXPENSES_TYPES.CREATE_EXPENSE:
			return {
				...state,
				list: state.list.concat(action.data),
			};
		case EXPENSES_TYPES.EDIT_EXPENSE:
			const editedStatusIndex = state.list.findIndex(
				item => item.id === action.data.id
			);

			return {
				...state,
				list: [
					...state.list.slice(0, editedStatusIndex),
					action.data,
					...state.list.slice(editedStatusIndex + 1),
				],
			};
		case EXPENSES_TYPES.DELETE_EXPENSE:
			return {
				...state,
				list: state.list.filter(
					item => !action.data.includes(item.id)
				),
			};
		case AUTH_TYPES.LOGOUT:
			return initialState;
		default:
			return state;
	}
};
