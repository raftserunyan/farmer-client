import { AUTH_TYPES } from "redux/types/auth"
import { SALES_TYPES } from "redux/types/sales"

const initialState = {
  loaded: false,
  total: 0,
  list: []
}

export const sales = (state = initialState, action) => {
  switch(action.type) {
    case SALES_TYPES.LOAD_SALES:
      return {
        ...state,
        loaded: true,
        list: action.list,
        total: action.total
      }
    case SALES_TYPES.CREATE_SALE:
      return {
        ...state,
        list: state.list.concat(action.data)
      }
    case SALES_TYPES.EDIT_SALE:
      const editedStatusIndex = state.list.findIndex(item => item.id === action.data.id)

      return {
        ...state,
        list: [
          ...state.list.slice(0, editedStatusIndex),
          action.data,
          ...state.list.slice(editedStatusIndex + 1)
        ]
      }
    case SALES_TYPES.DELETE_SALE:
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