import { AUTH_TYPES } from "redux/types/auth"
import { PRIVILEGES_TYPES } from "redux/types/privileges"

const initialState = {
  loaded: false,
  list: [],
  total: 0
}

export const privileges = (state = initialState, action) => {
  switch(action.type) {
    case PRIVILEGES_TYPES.LOAD_PRIVILEGES:
      return {
        ...state,
        loaded: true,
        list: action.list,
        total: action.total
      }
    case PRIVILEGES_TYPES.CREATE_PRIVILEGE:
      return {
        ...state,
        list: state.list.concat(action.data)
      }
    case PRIVILEGES_TYPES.EDIT_PRIVILEGE:
      const editedPrivilegeIndex = state.list.findIndex(privilege => privilege.id === action.data.id)

      return {
        ...state,
        list: [
          ...state.list.slice(0, editedPrivilegeIndex),
          action.data,
          ...state.list.slice(editedPrivilegeIndex + 1)
        ]
      }
    case PRIVILEGES_TYPES.DELETE_PRIVILEGE:
      return {
        ...state,
        list: state.list.filter(privilege => !action.data.includes(privilege.id))
      }
    case AUTH_TYPES.LOGOUT:
        return initialState
    default:
      return state
  }
}