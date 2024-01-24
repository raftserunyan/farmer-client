import { toast } from 'react-toastify'


import { TREATMENTS_TYPES } from 'redux/types/treatments'
import { HttpService } from 'services'

export const loadTreatments = (search) => async dispatch => {
  try {
    // const { data, total } = await HttpService.get('treatments', search)
    const list = await HttpService.get('treatments', search)

    dispatch({
      type: TREATMENTS_TYPES.LOAD_TREATMENTS,
      list,
      total: list.length
    })
  } catch (ex) {
    toast.error('Առաջացավ խնդիր')
  }
}

export const editTreatment = (values) => async dispatch => {
  try {
    await HttpService.put(`treatments`, { id: values.id }, values)
 
    dispatch({
      type: TREATMENTS_TYPES.EDIT_TREATMENT,
      data: values
    })

    toast.success('Գործողությունը հաջողությամբ կատարվեց')
  } catch (ex) {
    console.log(ex, 'ex')
    toast.error(`Առաջացավ խնդիր: ${ex.message}`)
  }
}

export const createTreatment = (values) => async dispatch => {
  try {
    const createdTreatmentId = await HttpService.post('treatments', values)
    
    dispatch({
      type: TREATMENTS_TYPES.CREATE_TREATMENT,
      data: { id: createdTreatmentId, ...values }
    })

    toast.success('Գործողությունը հաջողությամբ կատարվեց')
  } catch (ex) {
    toast.error(`Առաջացավ խնդիր: ${ex.message}`)
  }
}

export const deleteTreatment = (ids) => async dispatch => {
  try {
    await HttpService.delete('treatments', { id: ids[0] })
    
    dispatch({
      type: TREATMENTS_TYPES.DELETE_TREATMENT,
      data: ids
    })

    toast.success('Գործողությունը հաջողությամբ կատարվեց')
  } catch (ex) {
    toast.error(`Առաջացավ խնդիր: ${ex.message}`)
  }
}