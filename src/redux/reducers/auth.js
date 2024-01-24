import { AUTH_TYPES } from "redux/types/auth"

const initialState = {
  user: null,
  loggedIn: false
}

export const auth = (state = initialState, action) => {
  switch(action.type) {
    case AUTH_TYPES.SET_AUTH_DATA:
      return {
        ...state,
        loggedIn: true,
        user: action.user
      }
    case AUTH_TYPES.LOGOUT:
        return {
          ...state,
          loggedIn: false,
          user: null
        }
    default:
      return state
  }
}