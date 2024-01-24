import { connect } from 'react-redux'

import { SubjectForm as Self } from './SubjectForm'

import {
  editSubject,
  createSubject
} from 'redux/actions/professions'

const mapDispatchToProps = {
  editSubject,
  createSubject
}

export const SubjectForm = connect(null, mapDispatchToProps)(Self)