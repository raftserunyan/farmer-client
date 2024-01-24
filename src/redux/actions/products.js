import { toast } from 'react-toastify'


import { PRODUCTS_TYPES } from 'redux/types/products'
import { HttpService } from 'services'

export const loadProducts = (search) => async dispatch => {
  try {
    // const { data, total } = await HttpService.get('products', search)
    const list = await HttpService.get('products', search)
    console.log(list, 'list')

    dispatch({
      type: PRODUCTS_TYPES.LOAD_PRODUCTS,
      list,
      total: list.length
    })
  } catch (ex) {
    toast.error('Առաջացավ խնդիր')
  }
}

export const editProduct = (values) => async dispatch => {
  try {
    await HttpService.put(`products`, { id: values.id }, values)
 
    dispatch({
      type: PRODUCTS_TYPES.EDIT_PRODUCT,
      data: values
    })

    toast.success('Գործողությունը հաջողությամբ կատարվեց')
  } catch (ex) {
    console.log(ex, 'ex')
    toast.error(`Առաջացավ խնդիր: ${ex.message}`)
  }
}

export const createProduct = (values) => async dispatch => {
  try {
    const createdProductId = await HttpService.post('products', values)
    
    dispatch({
      type: PRODUCTS_TYPES.CREATE_PRODUCT,
      data: { id: createdProductId, ...values }
    })

    toast.success('Գործողությունը հաջողությամբ կատարվեց')
  } catch (ex) {
    toast.error(`Առաջացավ խնդիր: ${ex.message}`)
  }
}

export const deleteProduct = (ids) => async dispatch => {
  try {
    await HttpService.delete('products', { id: ids[0] })
    
    dispatch({
      type: PRODUCTS_TYPES.DELETE_PRODUCT,
      data: ids
    })

    toast.success('Գործողությունը հաջողությամբ կատարվեց')
  } catch (ex) {
    toast.error(`Առաջացավ խնդիր: ${ex.message}`)
  }
}