import { connect } from 'react-redux'

import { RateForm as Self } from './RateForm'
import { rateStudent } from 'redux/actions/students'
import { loadProfessionSubjects } from 'redux/actions/professions'

const mapStateToProps = ({ professions }) => ({
  professionsList: professions.list
})

const mapDispatchToProps = {
  rateStudent,
  loadProfessionSubjects
}

export const RateForm = connect(mapStateToProps, mapDispatchToProps)(Self)