import { toast } from 'react-toastify'


import { PRIVILEGES_TYPES } from 'redux/types/privileges'
import { HttpService } from 'services'

export const loadPrivileges = (search) => async dispatch => {
  try {
    const { data, total } = await HttpService.get('privilege', search)

    dispatch({
      type: PRIVILEGES_TYPES.LOAD_PRIVILEGES,
      list: data,
      total
    })
  } catch (ex) {
    toast.error('Առաջացավ խնդիր')
  }
}

export const editPrivilege = (values) => async dispatch => {
  try {
    await HttpService.put(`privilege/${values.id}`, values)
 
    dispatch({
      type: PRIVILEGES_TYPES.EDIT_PRIVILEGE,
      data: values
    })

    toast.success('Գործողությունը հաջողությամբ կատարվեց')
  } catch (ex) {
    toast.error(`Առաջացավ խնդիր: ${ex.message}`)
  }
}

export const createPrivilege = (values) => async dispatch => {
  try {
    const createdPrivilege = await HttpService.post('privilege', values)
    
    dispatch({
      type: PRIVILEGES_TYPES.CREATE_PRIVILEGE,
      data: createdPrivilege
    })

    toast.success('Գործողությունը հաջողությամբ կատարվեց')
  } catch (ex) {
    toast.error(`Առաջացավ խնդիր: ${ex.message}`)
  }
}

export const deletePrivilege = (ids) => async dispatch => {
  try {
    await HttpService.delete('privilege', { ids })
    
    dispatch({
      type: PRIVILEGES_TYPES.DELETE_PRIVILEGE,
      data: ids
    })

    toast.success('Գործողությունը հաջողությամբ կատարվեց')
  } catch (ex) {
    toast.error(`Առաջացավ խնդիր: ${ex.message}`)
  }
}