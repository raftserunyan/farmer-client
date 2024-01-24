import { connect } from 'react-redux'

import { Modal as Self } from './Modal'
import { hideModal } from 'redux/actions/modal'

const mapStateToProps = ({ modal }) => ({
  componentInfo: modal.componentInfo
})

const mapDispatchToProps = {
  hideModal
}

export const Modal = connect(mapStateToProps, mapDispatchToProps)(Self)