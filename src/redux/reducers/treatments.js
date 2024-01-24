import { AUTH_TYPES } from "redux/types/auth"
import { TREATMENTS_TYPES } from "redux/types/treatments"

const initialState = {
  loaded: false,
  total: 0,
  list: []
}

export const treatments = (state = initialState, action) => {
  switch(action.type) {
    case TREATMENTS_TYPES.LOAD_TREATMENTS:
      return {
        ...state,
        loaded: true,
        list: action.list,
        total: action.total
      }
    case TREATMENTS_TYPES.CREATE_TREATMENT:
      return {
        ...state,
        list: state.list.concat(action.data)
      }
    case TREATMENTS_TYPES.EDIT_TREATMENT:
      const editedStatusIndex = state.list.findIndex(item => item.id === action.data.id)

      return {
        ...state,
        list: [
          ...state.list.slice(0, editedStatusIndex),
          action.data,
          ...state.list.slice(editedStatusIndex + 1)
        ]
      }
    case TREATMENTS_TYPES.DELETE_TREATMENT:
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