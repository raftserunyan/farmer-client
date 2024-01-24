import { AUTH_TYPES } from "redux/types/auth"
import { REGIONS_TYPES } from "redux/types/regions"

const initialState = {
  loaded: false,
  total: 0,
  list: []
}

export const regions = (state = initialState, action) => {
  switch(action.type) {
    case REGIONS_TYPES.LOAD_REGIONS:
      return {
        ...state,
        loaded: true,
        list: action.list,
        total: action.total
      }
    case REGIONS_TYPES.CREATE_REGION:
      return {
        ...state,
        list: state.list.concat(action.data)
      }
    case REGIONS_TYPES.EDIT_REGION:
      const editedRegionIndex = state.list.findIndex(region => region.id === action.data.id)

      return {
        ...state,
        list: [
          ...state.list.slice(0, editedRegionIndex),
          action.data,
          ...state.list.slice(editedRegionIndex + 1)
        ]
      }
    case REGIONS_TYPES.DELETE_REGION:
      return {
        ...state,
        list: state.list.filter(region => !action.data.includes(region.id))
      }
    case AUTH_TYPES.LOGOUT:
        return initialState
    default:
      return state
  }
}