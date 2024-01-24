import { APP_TYPES } from "redux/types/app"

const initialState = {
  ready: false,
  loading: false
}

export const app = (state = initialState, action) => {
  switch(action.type) {
    case APP_TYPES.INIT_APP:
      return {
        ...state,
        ready: true
      }
    case APP_TYPES.SET_LOADING:
      return {
        ...state,
        loading: action.loading
      }
    default:
      return state
  }
}