import { toast } from 'react-toastify';

import { INVESTMENTS_TYPES } from 'redux/types/investments';
import { HttpService } from 'services';
import { pick } from 'lodash';

export const loadInvestments = search => async dispatch => {
	try {
		// const { data, total } = await HttpService.post('investments', search)
		const res = await HttpService.post(
			'investments/Get',
			search
		);

		dispatch({
			type: INVESTMENTS_TYPES.LOAD_INVESTMENTS,
			list: res.results,
			total: res.total,
		});
	} catch (ex) {
		toast.error('Առաջացավ խնդիր');
	}
};

export const editInvestment = values => async dispatch => {
	try {
		await HttpService.put(
			`investments/${values.id}`,
			'',
			pick(values, ['amount', 'date', 'investorId'])
		);

		dispatch({
			type: INVESTMENTS_TYPES.EDIT_INVESTMENT,
			data: values,
		});

		toast.success('Գործողությունը հաջողությամբ կատարվեց');
	} catch (ex) {
		toast.error(`Առաջացավ խնդիր: ${ex.message}`);
	}
};

export const createInvestment =
	values => async dispatch => {
		try {
			const createdInvestment = await HttpService.post(
				'investments',
				pick(values, ['amount', 'date', 'investorId'])
			);

			dispatch({
				type: INVESTMENTS_TYPES.CREATE_INVESTMENT,
				data: createdInvestment,
			});

			toast.success('Գործողությունը հաջողությամբ կատարվեց');
		} catch (ex) {
			toast.error(`Առաջացավ խնդիր: ${ex.message}`);
		}
	};

export const deleteInvestment = ids => async dispatch => {
	console.log(ids, 'ids');
	try {
		await HttpService.delete('investments', { id: ids[0] });

		dispatch({
			type: INVESTMENTS_TYPES.DELETE_INVESTMENT,
			data: ids,
		});

		toast.success('Գործողությունը հաջողությամբ կատարվեց');
	} catch (ex) {
		toast.error(`Առաջացավ խնդիր: ${ex.message}`);
	}
};
