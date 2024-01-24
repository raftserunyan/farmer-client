import { connect } from 'react-redux'

import { loadAllData } from 'redux/actions/app' 
import { FiltersList as Self } from './FiltersList'
import { loadStudents } from 'redux/actions/students'
import { loadCommands } from 'redux/actions/commands'

const mapStateToProps = (state) => ({
  state
})

const mapDispatchToProps = {
  loadAllData,
  loadStudents,
  loadCommands
}

export const FiltersList = connect(mapStateToProps, mapDispatchToProps)(Self)