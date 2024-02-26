import { toast } from 'react-toastify';

import { INVESTORS_TYPES } from 'redux/types/investors';
import { HttpService } from 'services';

export const loadInvestors = search => async dispatch => {
	try {
		// const { data, total } = await HttpService.post('investors', search)
		const res = await HttpService.post(
			'investors/Get',
			search
		);

		dispatch({
			type: INVESTORS_TYPES.LOAD_INVESTORS,
			list: res.results,
			total: res.total,
		});
	} catch (ex) {
		toast.error('Առաջացավ խնդիր');
	}
};

export const editInvestor = values => async dispatch => {
	try {
		await HttpService.put(
			`investors/${values.id}`,
			{},
			values
		);

		dispatch({
			type: INVESTORS_TYPES.EDIT_INVESTOR,
			data: values,
		});

		toast.success('Գործողությունը հաջողությամբ կատարվեց');
	} catch (ex) {
		toast.error(`Առաջացավ խնդիր: ${ex.message}`);
	}
};

export const createInvestor = values => async dispatch => {
	try {
		const createdInvestor = await HttpService.post(
			'investors',
			values
		);

		dispatch({
			type: INVESTORS_TYPES.CREATE_INVESTOR,
			data: createdInvestor,
		});

		toast.success('Գործողությունը հաջողությամբ կատարվեց');
	} catch (ex) {
		toast.error(`Առաջացավ խնդիր: ${ex.message}`);
	}
};

export const deleteInvestor = ids => async dispatch => {
	try {
		await HttpService.delete(`investors/${ids[0]}`);

		dispatch({
			type: INVESTORS_TYPES.DELETE_INVESTOR,
			data: ids,
		});

		toast.success('Գործողությունը հաջողությամբ կատարվեց');
	} catch (ex) {
		toast.error(`Առաջացավ խնդիր: ${ex.message}`);
	}
};
