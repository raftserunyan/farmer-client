import { connect } from 'react-redux'

import { StudentForm as Self } from './StudentForm'

import {
  editStudent,
  createStudent
} from 'redux/actions/students'
import { loadAllData } from 'redux/actions/app' 

const mapStateToProps = (state) => ({
  state
})

const mapDispatchToProps = {
  editStudent,
  loadAllData,
  createStudent
}

export const StudentForm = connect(mapStateToProps, mapDispatchToProps)(Self)