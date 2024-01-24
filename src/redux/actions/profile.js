import { toast } from 'react-toastify'
import { HttpService } from 'services'
import { PROFILE_TYPES } from 'redux/types/profile'

export const loadProfileCommandsHistory = (search) => async dispatch => {
  try {
    const { data, total } = await HttpService.get(`command-history`, {...search, orderBy: 'createdAt', orderDirection: 'DESC'})

    dispatch({
      type: PROFILE_TYPES.LOAD_COMMANDS_HISTORY,
      data,
      total
    })
  } catch (ex) {
    toast.error(`Առաջացավ խնդիր: ${ex.message}`)
  }
}

export const loadProfile = (studentId) => async dispatch => {
  try {
    const profileData = await HttpService.get(`student/${studentId}`)

    dispatch({
      type: PROFILE_TYPES.LOAD_PROFILE,
      data: profileData
    })
  } catch (ex) {
    toast.error(`Առաջացավ խնդիր: ${ex.message}`)
  }
}

