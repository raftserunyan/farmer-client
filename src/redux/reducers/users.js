import { AUTH_TYPES } from "redux/types/auth"
import { USERS_TYPES } from "redux/types/users"

const initialState = {
  loaded: false,
  total: 0,
  list: []
}

export const users = (state = initialState, action) => {
  switch(action.type) {
    case USERS_TYPES.LOAD_USERS:
      return {
        ...state,
        loaded: true,
        list: action.list,
        total: action.total
      }
    case USERS_TYPES.CREATE_USER:
      return {
        ...state,
        list: state.list.concat(action.data)
      }
    case USERS_TYPES.EDIT_USER:
      const editedUserIndex = state.list.findIndex(prof => prof.id === action.data.id)

      return {
        ...state,
        list: [
          ...state.list.slice(0, editedUserIndex),
          action.data,
          ...state.list.slice(editedUserIndex + 1)
        ]
      }
    case USERS_TYPES.DELETE_USER:
      return {
        ...state,
        list: state.list.filter(user => !action.data.includes(user.id))
      }
    case AUTH_TYPES.LOGOUT:
        return initialState
    default:
      return state
  }
}