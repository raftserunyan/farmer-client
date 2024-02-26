import { toast } from 'react-toastify';

import { EXPENSES_TYPES } from 'redux/types/expenses';
import { HttpService } from 'services';

export const loadExpenses = search => async dispatch => {
	try {
		// const { data, total } = await HttpService.post('expenses', search)
		const res = await HttpService.post(
			'expenses/Get',
			search
		);

		dispatch({
			type: EXPENSES_TYPES.LOAD_EXPENSES,
			list: res.results,
			total: res.total,
		});
	} catch (ex) {
		toast.error('Առաջացավ խնդիր');
	}
};

export const editExpense = values => async dispatch => {
	try {
		await HttpService.put(
			`expenses/${values.id}`,
			{},
			values
		);

		dispatch({
			type: EXPENSES_TYPES.EDIT_EXPENSE,
			data: values,
		});

		toast.success('Գործողությունը հաջողությամբ կատարվեց');
	} catch (ex) {
		console.log(ex, 'ex');
		toast.error(`Առաջացավ խնդիր: ${ex.message}`);
	}
};

export const createExpense = values => async dispatch => {
	try {
		const createdExpense = await HttpService.post(
			'expenses',
			values
		);

		dispatch({
			type: EXPENSES_TYPES.CREATE_EXPENSE,
			data: createdExpense,
		});

		toast.success('Գործողությունը հաջողությամբ կատարվեց');
	} catch (ex) {
		toast.error(`Առաջացավ խնդիր: ${ex.message}`);
	}
};

export const deleteExpense = ids => async dispatch => {
	try {
		await HttpService.delete(`expenses/${ids[0]}`, {
			id: ids[0],
		});

		dispatch({
			type: EXPENSES_TYPES.DELETE_EXPENSE,
			data: ids,
		});

		toast.success('Գործողությունը հաջողությամբ կատարվեց');
	} catch (ex) {
		toast.error(`Առաջացավ խնդիր: ${ex.message}`);
	}
};
