import { connect } from 'react-redux'

import { showModal } from 'redux/actions/modal'
import { FieldsForm as Self } from './FieldsForm'

const mapDispatchToProps = { 
  showModal
}

export const FieldsForm = connect(null, mapDispatchToProps)(Self)