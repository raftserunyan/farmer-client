import { toast } from 'react-toastify';

import { COMMUNITIES_TYPES } from 'redux/types/communities';
import { HttpService } from 'services';

export const loadCommunities = (search) => async (dispatch) => {
  try {
    const { data, total } = await HttpService.get('community', search);

    dispatch({
      type: COMMUNITIES_TYPES.LOAD_COMMUNITIES,
      list: data.sort(function (x, y) {
        return x.name === 'Այլ' ? -1 : y.name === 'Այլ' ? 1 : 0;
      }),
      total
    });
  } catch (ex) {
    toast.error('Առաջացավ խնդիր');
  }
};

export const editCommunity = (values) => async (dispatch) => {
  try {
    await HttpService.put(`community/${values.id}`, values);

    dispatch({
      type: COMMUNITIES_TYPES.EDIT_COMMUNITY,
      data: values
    });

    toast.success('Գործողությունը հաջողությամբ կատարվեց');
  } catch (ex) {
    toast.error(`Առաջացավ խնդիր: ${ex.message}`);
  }
};

export const createCommunity = (values) => async (dispatch) => {
  try {
    const createdCommunity = await HttpService.post('community', values);

    dispatch({
      type: COMMUNITIES_TYPES.CREATE_COMMUNITY,
      data: {
        ...createdCommunity,
        region: values.region
      }
    });

    toast.success('Գործողությունը հաջողությամբ կատարվեց');
  } catch (ex) {
    toast.error(`Առաջացավ խնդիր: ${ex.message}`);
  }
};

export const deleteCommunity = (ids) => async (dispatch) => {
  try {
    await HttpService.delete('community', { ids });

    dispatch({
      type: COMMUNITIES_TYPES.DELETE_COMMUNITY,
      data: ids
    });

    toast.success('Գործողությունը հաջողությամբ կատարվեց');
  } catch (ex) {
    toast.error(`Առաջացավ խնդիր: ${ex.message}`);
  }
};
