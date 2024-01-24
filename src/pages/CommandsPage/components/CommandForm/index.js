import { connect } from 'react-redux'

import { CommandForm as Self } from './CommandForm'

import {
  editCommand,
  createCommand
} from 'redux/actions/commands'
// import { loadStatuses } from 'redux/actions/investments'
import { showModal } from 'redux/actions/modal'

const mapStateToProps = ({ statuses }) => ({
  statuses
})

const mapDispatchToProps = {
  // loadStatuses,
  showModal,
  editCommand,
  createCommand
}

export const CommandForm = connect(mapStateToProps, mapDispatchToProps)(Self)