import { AUTH_TYPES } from "redux/types/auth"
import { PRODUCTS_TYPES } from "redux/types/products"

const initialState = {
  loaded: false,
  total: 0,
  list: []
}

export const products = (state = initialState, action) => {
  switch(action.type) {
    case PRODUCTS_TYPES.LOAD_PRODUCTS:
      return {
        ...state,
        loaded: true,
        list: action.list,
        total: action.total
      }
    case PRODUCTS_TYPES.CREATE_PRODUCT:
      return {
        ...state,
        list: state.list.concat(action.data)
      }
    case PRODUCTS_TYPES.EDIT_PRODUCT:
      const editedStatusIndex = state.list.findIndex(item => item.id === action.data.id)

      return {
        ...state,
        list: [
          ...state.list.slice(0, editedStatusIndex),
          action.data,
          ...state.list.slice(editedStatusIndex + 1)
        ]
      }
    case PRODUCTS_TYPES.DELETE_PRODUCT:
      return {
        ...state,
        list: state.list.filter(item => !action.data.includes(item.id))
      }
    case AUTH_TYPES.LOGOUT:
        return initialState
    default:
      return state
  }
}