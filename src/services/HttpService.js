import qs from 'qs';

import store from 'redux/store';
import { StorageService } from 'services';
import { setLoading } from 'redux/actions/app';
import { filterNonNull } from 'helpers';
import { logout } from 'redux/actions/auth';

export class HttpService {
  static request(method, path, data, options = { withoutLoading: false }) {
    const requestUrl = `${process.env.REACT_APP_API_URL}/${path}`;

    const headers = new Headers({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      mode: 'no-cors'
    });

    if (!options.noToken) {
      const token = StorageService.get('token');

      if (token) headers.append('Authorization', `Bearer ${token}`);
    }

    const fetchOptions = {
      method,
      headers
    };

    if (data) {
      fetchOptions.body = JSON.stringify(data);
    }

    try {
      if (!options.withoutLoading) store.dispatch(setLoading(true));
      return fetch(requestUrl, fetchOptions)
        .then((res) => {
          if (res.status === 401) {
            store.dispatch(logout())
          }
          console.log(res.status, 'rersesrsrsr')
          return res
            .json()
            .then((json) => {
              console.log('hehe', res)
              if (res.status === 401) {
                // const refreshToken = StorageService.get('refreshToken')
                // if (refreshToken) 
                console.log('status bug')
                store.dispatch(logout())
                return Promise.reject({ status: 401 });
              }
              if (res.status >= 200 && res.status < 300) {
                return Promise.resolve(json);
              } else {
                return Promise.reject(json);
              }
            })
            .catch((e) => {
              // store.dispatch(logout())
              return Promise.resolve({});
            })
            .finally(() => {
              store.dispatch(setLoading(false));
            });
        })
        .catch((e) => {
          console.log('hehehehe', e)
          return Promise.reject(e);
        })
        .finally(() => {
          if (!options.withoutLoading) store.dispatch(setLoading(false));
        });
    } catch (e) {
      console.log('muahaha', e)
      return Promise.reject(e);
    }
  }

  static async get(path, search = { limit: 0 }, options) {
    let queryString;

    if (typeof search === 'object')
      queryString = '?' + qs.stringify({ ...filterNonNull(search) });
    else queryString = search || '';
    return await HttpService.request('get', path + `${queryString}`, options);
  }

  static async post(path, data, options) {
    return await HttpService.request('post', path, data, options);
  }

  static async delete(path, search, options) {
    const ids = Array.isArray(search.ids)
      ? search
      : {
          id: search.id
        };

    const queryString = qs.stringify(filterNonNull(ids));

    return await HttpService.request(
      'delete',
      path + `?${queryString}`,
      ids,
      options
    );
  }

  static async put(path, search, data, options) {
    let queryString;

    if (typeof search === 'object')
      queryString = '?' + qs.stringify({ ...filterNonNull(search) });
    else queryString = search || '';

    return await HttpService.request('put', path + `${queryString}`, data, options);
  }

  static async patch(path, data, options) {
    return await HttpService.request('patch', path, data, options);
  }
}
