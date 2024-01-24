import { connect } from 'react-redux'

import { GroupForm as Self } from './GroupForm'

import { loadProfessionSubjects } from 'redux/actions/professions'
import {
  editGroup,
  createGroup
} from 'redux/actions/groups'

const mapStateToProps = ({ professions }) => ({
  professionsList: professions.list
})

const mapDispatchToProps = {
  editGroup,
  createGroup,
  loadProfessionSubjects
}

export const GroupForm = connect(mapStateToProps, mapDispatchToProps)(Self)