import { AUTH_TYPES } from "redux/types/auth"
import { INVESTORS_TYPES } from "redux/types/investors"

const initialState = {
  loaded: false,
  total: 0,
  list: []
}

export const investors = (state = initialState, action) => {
  switch(action.type) {
    case INVESTORS_TYPES.LOAD_INVESTORS:
      console.log(action, 'data')
      return {
        ...state,
        loaded: true,
        list: action.list,
        total: action.total
      }
    case INVESTORS_TYPES.CREATE_INVESTOR:
      return {
        ...state,
        list: state.list.concat(action.data)
      }
    case INVESTORS_TYPES.EDIT_INVESTOR:
      const editedStatusIndex = state.list.findIndex(status => status.id === action.data.id)

      return {
        ...state,
        list: [
          ...state.list.slice(0, editedStatusIndex),
          action.data,
          ...state.list.slice(editedStatusIndex + 1)
        ]
      }
    case INVESTORS_TYPES.DELETE_INVESTOR:
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