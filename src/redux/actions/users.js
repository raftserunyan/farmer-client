import { toast } from 'react-toastify'


import { HttpService } from 'services'
import { USERS_TYPES } from 'redux/types/users'

export const loadUsers = (search) => async dispatch => {
  try {
    const { data, total } = await HttpService.get('user', search)

    dispatch({
      type: USERS_TYPES.LOAD_USERS,
      list: data,
      total
    })
  } catch (ex) {
    toast.error('Առաջացավ խնդիր')
  }
}

export const editUser = (values) => async dispatch => {
  try {
    await HttpService.put(`user/${values.id}`, values)
 
    dispatch({
      type: USERS_TYPES.EDIT_USER,
      data: values
    })

    toast.success('Գործողությունը հաջողությամբ կատարվեց')
  } catch (ex) {
    toast.error(`Առաջացավ խնդիր: ${ex.message}`)
  }
}

export const createUser = (values) => async dispatch => {
  try {
    const createdUSER = await HttpService.post('user', values)
    
    dispatch({
      type: USERS_TYPES.CREATE_USER,
      data: createdUSER
    })

    toast.success('Գործողությունը հաջողությամբ կատարվեց')
  } catch (ex) {
    toast.error(`Առաջացավ խնդիր: ${ex.message}`)
  }
}

export const deleteUser = (ids) => async dispatch => {
  try {
    await HttpService.delete('user', { ids })
    
    dispatch({
      type: USERS_TYPES.DELETE_USER,
      data: ids
    })

    toast.success('Գործողությունը հաջողությամբ կատարվեց')
  } catch (ex) {
    toast.error(`Առաջացավ խնդիր: ${ex.message}`)
  }
}