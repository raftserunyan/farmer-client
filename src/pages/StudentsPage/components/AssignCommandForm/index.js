import { connect } from 'react-redux'

import { showModal } from 'redux/actions/modal'
import { AssignCommandForm as Self } from './AssignCommandForm'
import { loadCommands, assignCommand } from 'redux/actions/commands'

const mapStateToProps = ({ commands }) => ({
  commandsList: commands.list
})

const mapDispatchToProps = {
  showModal,
  loadCommands,
  assignCommand
}

export const AssignCommandForm = connect(mapStateToProps, mapDispatchToProps)(Self)