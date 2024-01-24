import { AUTH_TYPES } from "redux/types/auth"
import { CUSTOMERS_TYPES } from "redux/types/customers"

const initialState = {
  loaded: false,
  total: 0,
  list: []
}

export const customers = (state = initialState, action) => {
  switch(action.type) {
    case CUSTOMERS_TYPES.LOAD_CUSTOMERS:
      return {
        ...state,
        loaded: true,
        list: action.list,
        total: action.total
      }
    case CUSTOMERS_TYPES.CREATE_CUSTOMER:
      return {
        ...state,
        list: state.list.concat(action.data)
      }
    case CUSTOMERS_TYPES.EDIT_CUSTOMER:
      const editedStatusIndex = state.list.findIndex(item => item.id === action.data.id)

      return {
        ...state,
        list: [
          ...state.list.slice(0, editedStatusIndex),
          action.data,
          ...state.list.slice(editedStatusIndex + 1)
        ]
      }
    case CUSTOMERS_TYPES.DELETE_CUSTOMER:
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