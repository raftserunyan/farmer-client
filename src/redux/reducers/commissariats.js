import { AUTH_TYPES } from "redux/types/auth"
import { COMMISSARIATS_TYPES } from "redux/types/commissariats"

const initialState = {
  loaded: false,
  list: [],
  total: 0,
}

export const commissariats = (state = initialState, action) => {
  switch(action.type) {
    case COMMISSARIATS_TYPES.LOAD_COMMISSARIAT:
      return {
        ...state,
        loaded: true,
        list: action.list,
        total: action.total
      }
    case COMMISSARIATS_TYPES.CREATE_COMMISSARIAT:
      return {
        ...state,
        list: state.list.concat(action.data)
      }
    case COMMISSARIATS_TYPES.EDIT_COMMISSARIAT:
      const editedCommissariatIndex = state.list.findIndex(commissariat => commissariat.id === action.data.id)

      return {
        ...state,
        list: [
          ...state.list.slice(0, editedCommissariatIndex),
          action.data,
          ...state.list.slice(editedCommissariatIndex + 1)
        ]
      }
    case COMMISSARIATS_TYPES.DELETE_COMMISSARIAT:
      return {
        ...state,
        list: state.list.filter(commissariat => !action.data.includes(commissariat.id))
      }
    case AUTH_TYPES.LOGOUT:
        return initialState
    default:
      return state
  }
}