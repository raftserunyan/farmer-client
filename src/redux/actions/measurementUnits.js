import { toast } from 'react-toastify';

import { MEASUREMENT_UNITS_TYPES } from 'redux/types/measurementUnits';
import { HttpService } from 'services';

export const loadMeasurementUnits =
	search => async dispatch => {
		try {
			// const { data, total } = await HttpService.post('investors', search)
			const res = await HttpService.post(
				'measurementUnits/Get',
				search
			);

			dispatch({
				type: MEASUREMENT_UNITS_TYPES.LOAD_MEASUREMENT_UNITS,
				list: res.results,
				total: res.total,
			});
		} catch (ex) {
			toast.error('Առաջացավ խնդիր');
		}
	};

export const editMeasurementUnit =
	values => async dispatch => {
		try {
			await HttpService.put(
				`measurementUnits/${values.id}`,
				{},
				values
			);

			dispatch({
				type: MEASUREMENT_UNITS_TYPES.EDIT_MEASUREMENT_UNIT,
				data: values,
			});

			toast.success('Գործողությունը հաջողությամբ կատարվեց');
		} catch (ex) {
			toast.error(`Առաջացավ խնդիր: ${ex.message}`);
		}
	};

export const createMeasurementUnit =
	values => async dispatch => {
		try {
			const createdInvestor = await HttpService.post(
				'measurementUnits',
				values
			);

			dispatch({
				type: MEASUREMENT_UNITS_TYPES.CREATE_MEASUREMENT_UNIT,
				data: createdInvestor,
			});

			toast.success('Գործողությունը հաջողությամբ կատարվեց');
		} catch (ex) {
			toast.error(`Առաջացավ խնդիր: ${ex.message}`);
		}
	};

export const deleteMeasurementUnit =
	ids => async dispatch => {
		try {
			await HttpService.delete(`measurementUnits`, {
				id: ids[0],
			});

			dispatch({
				type: MEASUREMENT_UNITS_TYPES.DELETE_MEASUREMENT_UNIT,
				data: ids,
			});

			toast.success('Գործողությունը հաջողությամբ կատարվեց');
		} catch (ex) {
			toast.error(`Առաջացավ խնդիր: ${ex.message}`);
		}
	};
