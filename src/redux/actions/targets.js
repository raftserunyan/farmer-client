import { toast } from 'react-toastify';

import { TARGETS_TYPES } from 'redux/types/targets';
import { HttpService } from 'services';

export const loadTargets = search => async dispatch => {
	try {
		const res = await HttpService.post(
			'targets/Get',
			search
		);

		dispatch({
			type: TARGETS_TYPES.LOAD_TARGETS,
			list: res.results,
			total: res.total,
		});
	} catch (ex) {
		toast.error('Առաջացավ խնդիր');
	}
};

export const editTarget = values => async dispatch => {
	try {
		await HttpService.put(
			`targets/${values.id}`,
			{},
			values
		);

		dispatch({
			type: TARGETS_TYPES.EDIT_TARGET,
			data: values,
		});

		toast.success('Գործողությունը հաջողությամբ կատարվեց');
	} catch (ex) {
		toast.error(`Առաջացավ խնդիր: ${ex.message}`);
	}
};

export const createTarget = values => async dispatch => {
	try {
		const createdTarget = await HttpService.post(
			'targets',
			values
		);

		dispatch({
			type: TARGETS_TYPES.CREATE_TARGET,
			data: createdTarget,
		});

		toast.success('Գործողությունը հաջողությամբ կատարվեց');
	} catch (ex) {
		toast.error(`Առաջացավ խնդիր: ${ex.message}`);
	}
};

export const deleteTarget = ids => async dispatch => {
	try {
		await HttpService.delete(`targets/${ids[0]}`);

		dispatch({
			type: TARGETS_TYPES.DELETE_TARGET,
			data: ids,
		});

		toast.success('Գործողությունը հաջողությամբ կատարվեց');
	} catch (ex) {
		toast.error(`Առաջացավ խնդիր: ${ex.message}`);
	}
};
