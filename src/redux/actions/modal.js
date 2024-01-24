import { MODAL_TYPES } from 'redux/types/modal'

export const showModal = (component, props) => ({
  type: MODAL_TYPES.SHOW_MODAL,
  component,
  props
})

export const hideModal = () => ({
  type: MODAL_TYPES.HIDE_MODAL
})
