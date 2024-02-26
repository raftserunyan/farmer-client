import { toast } from 'react-toastify';

import { history } from 'system/history';
import { HttpService, StorageService } from 'services';
import { AUTH_TYPES } from 'redux/types/auth';

export const setAuthData = authData => ({
	type: AUTH_TYPES.SET_AUTH_DATA,
	user: authData,
});

export const getMe = () => async dispatch => {
	try {
		const me = await HttpService.post('auth/whoami');

		dispatch(setAuthData(me));
		StorageService.set('authData', me);
	} catch {
		toast.error('Առաջացավ խնդիր');
	}
};

export const login = values => async dispatch => {
	try {
		const { accessToken, name, username } =
			await HttpService.post('identity/login', values, {
				noToken: true,
			});
		if (accessToken) {
			console.log(
				accessToken,
				name,
				username,
				'token setting'
			);
			const user = {
				name,
				username,
			};
			StorageService.set('token', accessToken);
			StorageService.set('authData', user);

			dispatch(setAuthData(user));
		} else toast.error('Սխալ մուտքանուն կամ գաղտնաբառ');
		// dispatch(loadAllData())

		// history.push('/students')
	} catch {
		toast.error('Սխալ մուտքանուն կամ գաղտնաբառ');
	}
};

export const logout = () => dispatch => {
	dispatch({
		type: AUTH_TYPES.LOGOUT,
	});

	StorageService.remove('authData');
	StorageService.remove('token');

	history.push('/login');
};
