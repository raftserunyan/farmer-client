import { toast } from 'react-toastify';

import { PRODUCTS_TYPES } from 'redux/types/products';
import { HttpService } from 'services';

export const loadProducts = search => async dispatch => {
	try {
		// const { data, total } = await HttpService.post('products', search)
		const res = await HttpService.post(
			'products/Get',
			search
		);

		dispatch({
			type: PRODUCTS_TYPES.LOAD_PRODUCTS,
			list: res.results,
			total: res.total,
		});
	} catch (ex) {
		toast.error('Առաջացավ խնդիր');
	}
};

export const editProduct = values => async dispatch => {
	try {
		await HttpService.put(
			`products/${values.id}`,
			{},
			values
		);

		dispatch({
			type: PRODUCTS_TYPES.EDIT_PRODUCT,
			data: values,
		});

		toast.success('Գործողությունը հաջողությամբ կատարվեց');
	} catch (ex) {
		toast.error(`Առաջացավ խնդիր: ${ex.message}`);
	}
};

export const createProduct = values => async dispatch => {
	try {
		const createdProduct = await HttpService.post(
			'products',
			values
		);

		dispatch({
			type: PRODUCTS_TYPES.CREATE_PRODUCT,
			data: createdProduct,
		});

		toast.success('Գործողությունը հաջողությամբ կատարվեց');
	} catch (ex) {
		toast.error(`Առաջացավ խնդիր: ${ex.message}`);
	}
};

export const deleteProduct = ids => async dispatch => {
	try {
		await HttpService.delete(`products/${ids[0]}`);

		dispatch({
			type: PRODUCTS_TYPES.DELETE_PRODUCT,
			data: ids,
		});

		toast.success('Գործողությունը հաջողությամբ կատարվեց');
	} catch (ex) {
		toast.error(`Առաջացավ խնդիր: ${ex.message}`);
	}
};
