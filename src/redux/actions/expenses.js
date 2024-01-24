import { toast } from 'react-toastify'


import { EXPENSES_TYPES } from 'redux/types/expenses'
import { HttpService } from 'services'

export const loadExpenses = (search) => async dispatch => {
  try {
    // const { data, total } = await HttpService.get('expenses', search)
    const list = await HttpService.get('expenses', search)
    console.log(list, 'list')

    dispatch({
      type: EXPENSES_TYPES.LOAD_EXPENSES,
      list,
      total: list.length
    })
  } catch (ex) {
    toast.error('Առաջացավ խնդիր')
  }
}

export const editExpense = (values) => async dispatch => {
  try {
    await HttpService.put(`expenses`, { id: values.id }, values)
 
    dispatch({
      type: EXPENSES_TYPES.EDIT_EXPENSE,
      data: values
    })

    toast.success('Գործողությունը հաջողությամբ կատարվեց')
  } catch (ex) {
    console.log(ex, 'ex')
    toast.error(`Առաջացավ խնդիր: ${ex.message}`)
  }
}

export const createExpense = (values) => async dispatch => {
  try {
    const createdExpenseId = await HttpService.post('expenses', values)
    
    dispatch({
      type: EXPENSES_TYPES.CREATE_EXPENSE,
      data: { id: createdExpenseId, ...values }
    })

    toast.success('Գործողությունը հաջողությամբ կատարվեց')
  } catch (ex) {
    toast.error(`Առաջացավ խնդիր: ${ex.message}`)
  }
}

export const deleteExpense = (ids) => async dispatch => {
  try {
    await HttpService.delete('expenses', { id: ids[0] })
    
    dispatch({
      type: EXPENSES_TYPES.DELETE_EXPENSE,
      data: ids
    })

    toast.success('Գործողությունը հաջողությամբ կատարվեց')
  } catch (ex) {
    toast.error(`Առաջացավ խնդիր: ${ex.message}`)
  }
}