import { connect } from 'react-redux'

import { CommandsPage as Self } from './CommandsPage'
import { loadCommands, deleteCommand } from 'redux/actions/commands'
import { showModal } from 'redux/actions/modal'

const mapStateToProps = ({ commands }) => ({
  commands
})

const mapDispatchToProps = {
  showModal,
  loadCommands,
  deleteCommand
}

export const CommandsPage = connect(mapStateToProps, mapDispatchToProps)(Self)