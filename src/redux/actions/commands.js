import { toast } from 'react-toastify'

import { HttpService } from 'services'
import { COMMANDS_TYPES } from 'redux/types/commands'

export const assignCommand = (values) => async dispatch => {
  try {
    await HttpService.post('command/attach', values)

    dispatch({
      type: COMMANDS_TYPES.ASSIGN_COMMAND_TO_STUDENT,
      command: values
    })

    toast.success('Հրամանը կցագրվեց ուսանողներին')
  } catch (ex) {
    toast.error(`Առաջացավ խնդիր: ${ex.message}`)
  }
}

export const loadCommands = (search) => async dispatch => {
  try {
    const { data, total } = await HttpService.get('command', search)

    dispatch({
      type: COMMANDS_TYPES.LOAD_COMMANDS,
      list: data,
      total
    })
  } catch (ex) {
    toast.error(`Առաջացավ խնդիր: ${ex.message}`)
  }
}

export const editCommand = (values) => async dispatch => {
  try {
    await HttpService.put(`command/${values.id}`, values)
 
    dispatch({
      type: COMMANDS_TYPES.EDIT_COMMAND,
      data: values
    })

    toast.success('Գործողությունը հաջողությամբ կատարվեց')
  } catch (ex) {
    toast.error(`Առաջացավ խնդիր: ${ex.message}`)
  }
}

export const createCommand = (values) => async dispatch => {
  try {
    const createdCommand = await HttpService.post('command', values)
    
    dispatch({
      type: COMMANDS_TYPES.CREATE_COMMAND,
      data: {
        ...createdCommand,
        status: values.status
      }
    })

    toast.success('Գործողությունը հաջողությամբ կատարվեց')
  } catch (ex) {
    toast.error(`Առաջացավ խնդիր: ${ex.message}`)
  }
}

export const deleteCommand = (ids) => async dispatch => {
  try {
    await HttpService.delete('command', { ids })
    
    dispatch({
      type: COMMANDS_TYPES.DELETE_COMMAND,
      data: ids
    })

    toast.success('Գործողությունը հաջողությամբ կատարվեց')
  } catch (ex) {
    toast.error(`Առաջացավ խնդիր: ${ex.message}`)
  }
}