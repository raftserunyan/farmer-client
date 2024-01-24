import { toast } from 'react-toastify';

import { REGIONS_TYPES } from 'redux/types/regions';
import { HttpService } from 'services';

export const loadRegions = (search) => async (dispatch) => {
  try {
    const { data, total } = await HttpService.get('region', search);

    dispatch({
      type: REGIONS_TYPES.LOAD_REGIONS,
      list: data.sort(function (x, y) {
        return x.name === 'Այլ' ? -1 : y.name === 'Այլ' ? 1 : 0;
      }),
      total
    });
  } catch (ex) {
    toast.error('Առաջացավ խնդիր');
  }
};

export const editRegion = (values) => async (dispatch) => {
  try {
    await HttpService.put(`region/${values.id}`, values);

    dispatch({
      type: REGIONS_TYPES.EDIT_REGION,
      data: values
    });

    toast.success('Գործողությունը հաջողությամբ կատարվեց');
  } catch (ex) {
    toast.error(`Առաջացավ խնդիր: ${ex.message}`);
  }
};

export const createRegion = (values) => async (dispatch) => {
  try {
    const createdRegion = await HttpService.post('region', values);

    dispatch({
      type: REGIONS_TYPES.CREATE_REGION,
      data: createdRegion
    });

    toast.success('Գործողությունը հաջողությամբ կատարվեց');
  } catch (ex) {
    toast.error(`Առաջացավ խնդիր: ${ex.message}`);
  }
};

export const deleteRegion = (ids) => async (dispatch) => {
  try {
    await HttpService.delete('region', { ids });

    dispatch({
      type: REGIONS_TYPES.DELETE_REGION,
      data: ids
    });

    toast.success('Գործողությունը հաջողությամբ կատարվեց');
  } catch (ex) {
    toast.error(`Առաջացավ խնդիր: ${ex.message}`);
  }
};
