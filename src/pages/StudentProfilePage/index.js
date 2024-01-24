import { connect } from 'react-redux'

import { showModal } from 'redux/actions/modal'
import { loadProfile, loadProfileCommandsHistory } from 'redux/actions/profile'
import { deleteStudent } from 'redux/actions/students'
import { StudentProfilePage as Self } from './StudentProfilePage'

const mapStateToProps = ({ profile }) => ({
  profileData: profile.data,
  loaded: profile.loaded
})

const mapDispatchToProps = {
  showModal,
  loadProfile,
  deleteStudent,
  loadProfileCommandsHistory
}

export const StudentProfilePage = connect(mapStateToProps, mapDispatchToProps)(Self)