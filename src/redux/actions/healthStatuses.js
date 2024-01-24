import { toast } from 'react-toastify'


import { HEALTH_STATUSES_TYPES } from 'redux/types/healthStatuses'
import { HttpService } from 'services'

export const loadHealthStatuses = (search) => async dispatch => {
  try {
    const { data, total } = await HttpService.get('health-status', search)

    dispatch({
      type: HEALTH_STATUSES_TYPES.LOAD_HEALTH_STATUSES,
      list: data,
      total
    })
  } catch (ex) {
    toast.error('Առաջացավ խնդիր')
  }
}

export const editHealthStatus = (values) => async dispatch => {
  try {
    await HttpService.put(`health-status/${values.id}`, values)
 
    dispatch({
      type: HEALTH_STATUSES_TYPES.EDIT_HEALTH_STATUS,
      data: values
    })

    toast.success('Գործողությունը հաջողությամբ կատարվեց')
  } catch (ex) {
    toast.error(`Առաջացավ խնդիր: ${ex.message}`)
  }
}

export const createHealthStatus = (values) => async dispatch => {
  try {
    const createdHealthStatus = await HttpService.post('health-status', values)
    
    dispatch({
      type: HEALTH_STATUSES_TYPES.CREATE_HEALTH_STATUS,
      data: createdHealthStatus
    })

    toast.success('Գործողությունը հաջողությամբ կատարվեց')
  } catch (ex) {
    toast.error(`Առաջացավ խնդիր: ${ex.message}`)
  }
}

export const deleteHealthStatus = (ids) => async dispatch => {
  try {
    await HttpService.delete('health-status', { ids })
    
    dispatch({
      type: HEALTH_STATUSES_TYPES.DELETE_HEALTH_STATUS,
      data: ids
    })

    toast.success('Գործողությունը հաջողությամբ կատարվեց')
  } catch (ex) {
    toast.error(`Առաջացավ խնդիր: ${ex.message}`)
  }
}