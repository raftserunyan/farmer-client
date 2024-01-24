import { AUTH_TYPES } from "redux/types/auth"
import { HEALTH_STATUSES_TYPES } from "redux/types/healthStatuses"

const initialState = {
  loaded: false,
  list: [],
  total: 0
}

export const healthStatuses = (state = initialState, action) => {
  switch(action.type) {
    case HEALTH_STATUSES_TYPES.LOAD_HEALTH_STATUSES:
      return {
        ...state,
        loaded: true,
        list: action.list,
        total: action.total
      }
    case HEALTH_STATUSES_TYPES.CREATE_HEALTH_STATUS:
      return {
        ...state,
        list: state.list.concat(action.data)
      }
    case HEALTH_STATUSES_TYPES.EDIT_HEALTH_STATUS:
      const editedStatusIndex = state.list.findIndex(editedStatusIndex => editedStatusIndex.id === action.data.id)

      return {
        ...state,
        list: [
          ...state.list.slice(0, editedStatusIndex),
          action.data,
          ...state.list.slice(editedStatusIndex + 1)
        ]
      }
    case HEALTH_STATUSES_TYPES.DELETE_HEALTH_STATUS:
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