import { connect } from 'react-redux'

import { FiltersList as Self } from './FiltersList'
import { loadCommands } from 'redux/actions/commands'

const mapStateToProps = ({ statuses }) => ({
  statusesList: statuses.list
})

const mapDispatchToProps = {
  loadCommands
}

export const FiltersList = connect(mapStateToProps, mapDispatchToProps)(Self)