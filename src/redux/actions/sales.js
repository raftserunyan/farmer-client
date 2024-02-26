import { toast } from 'react-toastify';

import { SALES_TYPES } from 'redux/types/sales';
import { HttpService } from 'services';

export const loadSales = search => async dispatch => {
	try {
		// const { data, total } = await HttpService.post('sales', search)
		const list = await HttpService.post('sales', search);

		dispatch({
			type: SALES_TYPES.LOAD_SALES,
			list,
			total: list.length,
		});
	} catch (ex) {
		toast.error('Առաջացավ խնդիր');
	}
};

export const editSale = values => async dispatch => {
	try {
		await HttpService.put(
			`sales`,
			{ id: values.id },
			values
		);

		dispatch({
			type: SALES_TYPES.EDIT_SALE,
			data: values,
		});

		toast.success('Գործողությունը հաջողությամբ կատարվեց');
	} catch (ex) {
		console.log(ex, 'ex');
		toast.error(`Առաջացավ խնդիր: ${ex.message}`);
	}
};

export const createSale = values => async dispatch => {
	try {
		const createdSale = await HttpService.post(
			'sales',
			values
		);

		dispatch({
			type: SALES_TYPES.CREATE_SALE,
			data: createdSale,
		});

		toast.success('Գործողությունը հաջողությամբ կատարվեց');
	} catch (ex) {
		toast.error(`Առաջացավ խնդիր: ${ex.message}`);
	}
};

export const deleteSale = ids => async dispatch => {
	try {
		await HttpService.delete('sales', { id: ids[0] });

		dispatch({
			type: SALES_TYPES.DELETE_SALE,
			data: ids,
		});

		toast.success('Գործողությունը հաջողությամբ կատարվեց');
	} catch (ex) {
		toast.error(`Առաջացավ խնդիր: ${ex.message}`);
	}
};
