import { AUTH_TYPES } from "redux/types/auth"
import { INVESTMENTS_TYPES } from "redux/types/investments"

const initialState = {
  loaded: false,
  total: 0,
  list: []
}

export const investments = (state = initialState, action) => {
  switch(action.type) {
    case INVESTMENTS_TYPES.LOAD_INVESTMENTS:
      console.log(action, 'data')
      return {
        ...state,
        loaded: true,
        list: action.list,
        total: action.total
      }
    case INVESTMENTS_TYPES.CREATE_INVESTMENT:
      return {
        ...state,
        list: state.list.concat(action.data)
      }
    case INVESTMENTS_TYPES.EDIT_INVESTMENT:
      const editedStatusIndex = state.list.findIndex(status => status.id === action.data.id)

      return {
        ...state,
        list: [
          ...state.list.slice(0, editedStatusIndex),
          action.data,
          ...state.list.slice(editedStatusIndex + 1)
        ]
      }
    case INVESTMENTS_TYPES.DELETE_INVESTMENT:
      return {
        ...state,
        list: state.list.filter(status => !action.data.includes(status.id))
      }
    case AUTH_TYPES.LOGOUT:
        return initialState
    default:
      return state
  }
}