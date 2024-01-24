import { toast } from 'react-toastify'


import { INVESTMENTS_TYPES } from 'redux/types/investments'
import { HttpService } from 'services'

export const loadInvestments = (search) => async dispatch => {
  try {
    // const { data, total } = await HttpService.get('investments', search)
    const list = await HttpService.get('investments', search)
    console.log(list, 'list')

    dispatch({
      type: INVESTMENTS_TYPES.LOAD_INVESTMENTS,
      list,
      total: list.length
    })
  } catch (ex) {
    toast.error('Առաջացավ խնդիր')
  }
}

export const editInvestment = (values) => async dispatch => {
  try {
    await HttpService.put(`investments`, { id: values.id }, values)
 
    dispatch({
      type: INVESTMENTS_TYPES.EDIT_INVESTMENT,
      data: values
    })

    toast.success('Գործողությունը հաջողությամբ կատարվեց')
  } catch (ex) {
    toast.error(`Առաջացավ խնդիր: ${ex.message}`)
  }
}

export const createInvestment = (values) => async dispatch => {
  try {
    const createdInvestmentId = await HttpService.post('investments', values)
    
    dispatch({
      type: INVESTMENTS_TYPES.CREATE_INVESTMENT,
      data: { id: createdInvestmentId, ...values }
    })

    toast.success('Գործողությունը հաջողությամբ կատարվեց')
  } catch (ex) {
    toast.error(`Առաջացավ խնդիր: ${ex.message}`)
  }
}

export const deleteInvestment = (ids) => async dispatch => {
  try {
    await HttpService.delete('investments', { id: ids[0] })
    
    dispatch({
      type: INVESTMENTS_TYPES.DELETE_INVESTMENT,
      data: ids
    })

    toast.success('Գործողությունը հաջողությամբ կատարվեց')
  } catch (ex) {
    toast.error(`Առաջացավ խնդիր: ${ex.message}`)
  }
}