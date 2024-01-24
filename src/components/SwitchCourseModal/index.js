import { connect } from 'react-redux'

import { SwitchCourseModal as Self } from './SwitchCourseModal'

import { loadGroups } from 'redux/actions/groups'

const mapStateToProps = ({ groups }) => ({
  groups
})

const mapDispatchToProps = {
  loadGroups,
}

export const SwitchCourseModal = connect(mapStateToProps, mapDispatchToProps)(Self)