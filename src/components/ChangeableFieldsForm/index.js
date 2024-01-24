import { connect } from 'react-redux'

import { showModal } from 'redux/actions/modal'
import { loadAllData } from 'redux/actions/app' 
import { ChangeableFieldsForm as Self } from './ChangeableFieldsForm'

const mapStateToProps = (state) => ({
  state
})

const mapDispatchToProps = {
  showModal,
  loadAllData
}

export const ChangeableFieldsForm = connect(mapStateToProps, mapDispatchToProps)(Self)