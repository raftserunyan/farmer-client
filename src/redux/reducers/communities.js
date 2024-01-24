import { AUTH_TYPES } from "redux/types/auth"
import { COMMUNITIES_TYPES } from "redux/types/communities"

const initialState = {
  loaded: false,
  list: [],
  total: 0
}

export const communities = (state = initialState, action) => {
  switch(action.type) {
    case COMMUNITIES_TYPES.LOAD_COMMUNITIES:
      return {
        ...state,
        loaded: true,
        list: action.list,
        total: action.total
      }
    case COMMUNITIES_TYPES.CREATE_COMMUNITY:
      return {
        ...state,
        list: state.list.concat(action.data)
      }
    case COMMUNITIES_TYPES.EDIT_COMMUNITY:
      const editedCommunityIndex = state.list.findIndex(community => community.id === action.data.id)

      return {
        ...state,
        list: [
          ...state.list.slice(0, editedCommunityIndex),
          action.data,
          ...state.list.slice(editedCommunityIndex + 1)
        ]
      }
    case COMMUNITIES_TYPES.DELETE_COMMUNITY:
      return {
        ...state,
        list: state.list.filter(community => !action.data.includes(community.id))
      }
    case AUTH_TYPES.LOGOUT:
        return initialState
    default:
      return state
  }
}