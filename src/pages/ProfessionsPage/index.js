import { connect } from 'react-redux'

import { ProfessionsPage as Self } from './ProfessionsPage'
import {
  editSubject,
  createSubject,
  deleteSubject,
  loadProfessions,
  deleteProfession,
  loadProfessionSubjects
} from 'redux/actions/professions'
import { showModal } from 'redux/actions/modal'

const mapStateToProps = ({ professions }) => ({
  professions,
})

const mapDispatchToProps = {
  showModal,
  editSubject,
  createSubject,
  deleteSubject,
  loadProfessions,
  deleteProfession,
  loadProfessionSubjects
}

export const ProfessionsPage = connect(mapStateToProps, mapDispatchToProps)(Self)