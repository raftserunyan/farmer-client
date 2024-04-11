import { pick } from 'lodash';
import { toast } from 'react-toastify';

import { TREATMENTS_TYPES } from 'redux/types/treatments';
import { HttpService } from 'services';

export const loadTreatments = search => async dispatch => {
	try {
		// const { data, total } = await HttpService.post('treatments', search)
		const res = await HttpService.post(
			'treatments/Get',
			search
		);

		dispatch({
			type: TREATMENTS_TYPES.LOAD_TREATMENTS,
			list: res.results,
			total: res.total,
		});
	} catch (ex) {
		toast.error('Առաջացավ խնդիր');
	}
};

export const editTreatment = values => async dispatch => {
	try {
		await HttpService.put(
			`treatments/${values.id}`,
			'',
			pick(values, [
				'drugName',
				'drugAmount',
				'date',
				'measurementUnitId',
				'treatedProductsIds',
			])
		);

		dispatch({
			type: TREATMENTS_TYPES.EDIT_TREATMENT,
			data: values,
		});

		toast.success('Գործողությունը հաջողությամբ կատարվեց');
	} catch (ex) {
		toast.error(`Առաջացավ խնդիր: ${ex.message}`);
	}
};

export const createTreatment = values => async dispatch => {
	try {
		const createdTreatment = await HttpService.post(
			'treatments',
			values
		);

		dispatch({
			type: TREATMENTS_TYPES.CREATE_TREATMENT,
			data: createdTreatment,
		});

		toast.success('Գործողությունը հաջողությամբ կատարվեց');
	} catch (ex) {
		toast.error(`Առաջացավ խնդիր: ${ex.message}`);
	}
};

export const deleteTreatment = ids => async dispatch => {
	try {
		await HttpService.delete(`treatments/${ids[0]}`);

		dispatch({
			type: TREATMENTS_TYPES.DELETE_TREATMENT,
			data: ids,
		});

		toast.success('Գործողությունը հաջողությամբ կատարվեց');
	} catch (ex) {
		toast.error(`Առաջացավ խնդիր: ${ex.message}`);
	}
};
