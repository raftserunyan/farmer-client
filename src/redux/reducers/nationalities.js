import { AUTH_TYPES } from "redux/types/auth"
import { NATIONALITIES_TYPES } from "redux/types/nationalities"

const initialState = {
  loaded: false,
  list: [],
  total: 0
}

export const nationalities = (state = initialState, action) => {
  switch(action.type) {
    case NATIONALITIES_TYPES.LOAD_NATIONALITIES:
      return {
        ...state,
        loaded: true,
        list: action.list,
        total: action.total
      }
    case NATIONALITIES_TYPES.CREATE_NATIONALITIES:
      return {
        ...state,
        list: state.list.concat(action.data)
      }
    case NATIONALITIES_TYPES.EDIT_NATIONALITIES:
      const editedNationalityIndex = state.list.findIndex(nationality => nationality.id === action.data.id)

      return {
        ...state,
        list: [
          ...state.list.slice(0, editedNationalityIndex),
          action.data,
          ...state.list.slice(editedNationalityIndex + 1)
        ]
      }
    case NATIONALITIES_TYPES.DELETE_NATIONALITIES:
      return {
        ...state,
        list: state.list.filter(nationality => !action.data.includes(nationality.id))
      }
    case AUTH_TYPES.LOGOUT:
        return initialState
    default:
      return state
  }
}