import { ConfirmationModal } from 'components/ConfirmationModal'
import { showModal } from 'redux/actions/modal'
import store from 'redux/store'

export const withConfirmation = ({ onYes, onNo }) => {
  store.dispatch(showModal(ConfirmationModal, { onYes, onNo }))
}