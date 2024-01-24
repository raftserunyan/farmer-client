import { connect } from 'react-redux'

import { StudentsPage as Self } from './StudentsPage'
import { loadStudents, deleteStudent } from 'redux/actions/students'
import { showModal } from 'redux/actions/modal'

const mapStateToProps = ({ students }) => ({
  students
})

const mapDispatchToProps = {
  showModal,
  loadStudents,
  deleteStudent
}

export const StudentsPage = connect(mapStateToProps, mapDispatchToProps)(Self)