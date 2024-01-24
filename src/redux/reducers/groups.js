import { AUTH_TYPES } from "redux/types/auth"
import { GROUPS_TYPES } from "redux/types/groups"

const initialState = {
  loaded: false,
  list: [],
  total: 0
}

export const groups = (state = initialState, action) => {
  switch(action.type) {
    case GROUPS_TYPES.LOAD_GROUPS:
      return {
        ...state,
        loaded: true,
        list: action.list,
        total: action.total
      }
    case GROUPS_TYPES.CREATE_GROUP:
      return {
        ...state,
        list: state.list.concat(action.data)
      }
    case GROUPS_TYPES.EDIT_GROUP:
      const editedGroupsIndex = state.list.findIndex(group => group.id === action.data.id)

      return {
        ...state,
        list: [
          ...state.list.slice(0, editedGroupsIndex),
          action.data,
          ...state.list.slice(editedGroupsIndex + 1)
        ]
      }
    case GROUPS_TYPES.DELETE_GROUP:
      return {
        ...state,
        list: state.list.filter(group => !action.data.includes(group.id))
      }
    case AUTH_TYPES.LOGOUT:
        return initialState
    default:
      return state
  }
}