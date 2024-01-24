import { connect } from 'react-redux'

import { ConfirmationModal as Self } from './ConfirmationModal'

import { hideModal } from 'redux/actions/modal'

const mapDispatchToProps = {
  hideModal
}

export const ConfirmationModal = connect(null, mapDispatchToProps)(Self)