import { createDispatchHook } from 'react-redux'
import { toast } from 'react-toastify'


import { GROUPS_TYPES } from 'redux/types/groups'
import { HttpService } from 'services'

export const loadGroups = (search) => async dispatch => {
  try {
    const { data, total } = await HttpService.get('group', search)

    dispatch({
      type: GROUPS_TYPES.LOAD_GROUPS,
      list: data,
      total
    })
  } catch (ex) {
    toast.error('Առաջացավ խնդիր')
  }
}

export const switchCourse = (groups) => async dispatch => {
  try {
    await HttpService.post('group/switchCourse', {
      groupIds: groups
    })

    dispatch(loadGroups({}))

    toast.success('Խմբերը հաջողությամբ փոխադրվեցին')
  } catch (ex) {
    toast.error('Առաջացավ խնդիր')
  }
}

export const editGroup = (values) => async dispatch => {
  try {
    await HttpService.put(`group/${values.id}`, values)
    const promises = []
    if (values.curriculum) {
      for (const curr of values.curriculum) {
        HttpService.put(`curriculum/${curr.id}`, curr)
      }
    }

    dispatch({
      type: GROUPS_TYPES.EDIT_GROUP,
      data: values
    })

    toast.success('Գործողությունը հաջողությամբ կատարվեց')
  } catch (ex) {
    toast.error(`Առաջացավ խնդիր: ${ex.message}`)
  }
}

export const createGroup = (values) => async dispatch => {
  try {
    const createdGroup = await HttpService.post('group', {
      ...values,
      currentSemester: 1
    })

    await HttpService.post('curriculum', values.curriculum.map(val => ({
      ...val,
      groupId: createdGroup.id
    })))

    dispatch({
      type: GROUPS_TYPES.CREATE_GROUP,
      data: {
        ...createdGroup,
        curriculum: values.curriculum
      }
    })

    toast.success('Գործողությունը հաջողությամբ կատարվեց')
  } catch (ex) {
    toast.error(`Առաջացավ խնդիր: ${ex.message}`)
  }
}

export const deleteGroup = (ids) => async dispatch => {
  try {
    await HttpService.delete('group', { ids })
    
    dispatch({
      type: GROUPS_TYPES.DELETE_GROUP,
      data: ids
    })

    toast.success('Գործողությունը հաջողությամբ կատարվեց')
  } catch (ex) {
    toast.error(`Առաջացավ խնդիր: ${ex.message}`)
  }
}