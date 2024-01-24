import { toast } from 'react-toastify'


import { INVESTORS_TYPES } from 'redux/types/investors'
import { HttpService } from 'services'

export const loadInvestors = (search) => async dispatch => {
  try {
    // const { data, total } = await HttpService.get('investors', search)
    const list = await HttpService.get('investors', search)

    dispatch({
      type: INVESTORS_TYPES.LOAD_INVESTORS,
      list,
      total: list.length
    })
  } catch (ex) {
    toast.error('Առաջացավ խնդիր')
  }
}

export const editInvestor = (values) => async dispatch => {
  try {
    await HttpService.put(`investors/`, { id: values.id }, values)
 
    dispatch({
      type: INVESTORS_TYPES.EDIT_INVESTOR,
      data: values
    })

    toast.success('Գործողությունը հաջողությամբ կատարվեց')
  } catch (ex) {
    toast.error(`Առաջացավ խնդիր: ${ex.message}`)
  }
}

export const createInvestor = (values) => async dispatch => {
  try {
    const createdInvestorId = await HttpService.post('investors', values)
    
    dispatch({
      type: INVESTORS_TYPES.CREATE_INVESTOR,
      data: { id: createdInvestorId, ...values, investments: [] }
    })

    toast.success('Գործողությունը հաջողությամբ կատարվեց')
  } catch (ex) {
    toast.error(`Առաջացավ խնդիր: ${ex.message}`)
  }
}

export const deleteInvestor = (ids) => async dispatch => {
  try {
    await HttpService.delete('investors', { id: ids[0] })
    
    dispatch({
      type: INVESTORS_TYPES.DELETE_INVESTOR,
      data: ids
    })

    toast.success('Գործողությունը հաջողությամբ կատարվեց')
  } catch (ex) {
    toast.error(`Առաջացավ խնդիր: ${ex.message}`)
  }
}