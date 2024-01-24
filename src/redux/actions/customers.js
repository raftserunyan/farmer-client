import { toast } from 'react-toastify'


import { CUSTOMERS_TYPES } from 'redux/types/customers'
import { HttpService } from 'services'

export const loadCustomers = (search) => async dispatch => {
  try {
    // const { data, total } = await HttpService.get('customers', search)
    const list = await HttpService.get('customers', search)

    dispatch({
      type: CUSTOMERS_TYPES.LOAD_CUSTOMERS,
      list,
      total: list.length
    })
  } catch (ex) {
    toast.error('Առաջացավ խնդիր')
  }
}

export const editCustomer = (values) => async dispatch => {
  try {
    await HttpService.put(`customers`, { id: values.id }, values)
 
    dispatch({
      type: CUSTOMERS_TYPES.EDIT_CUSTOMER,
      data: values
    })

    toast.success('Գործողությունը հաջողությամբ կատարվեց')
  } catch (ex) {
    console.log(ex, 'ex')
    toast.error(`Առաջացավ խնդիր: ${ex.message}`)
  }
}

export const createCustomer = (values) => async dispatch => {
  try {
    const createdCustomerId = await HttpService.post('customers', values)
    
    dispatch({
      type: CUSTOMERS_TYPES.CREATE_CUSTOMER,
      data: { id: createdCustomerId, ...values }
    })

    toast.success('Գործողությունը հաջողությամբ կատարվեց')
  } catch (ex) {
    toast.error(`Առաջացավ խնդիր: ${ex.message}`)
  }
}

export const deleteCustomer = (ids) => async dispatch => {
  try {
    await HttpService.delete('customers', { id: ids[0] })
    
    dispatch({
      type: CUSTOMERS_TYPES.DELETE_CUSTOMER,
      data: ids
    })

    toast.success('Գործողությունը հաջողությամբ կատարվեց')
  } catch (ex) {
    toast.error(`Առաջացավ խնդիր: ${ex.message}`)
  }
}