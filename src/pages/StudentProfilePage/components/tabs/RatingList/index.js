import { connect } from 'react-redux'

import { RatingList as Self } from './RatingList'
import { rateStudent } from 'redux/actions/students'
import { loadProfessionSubjects } from 'redux/actions/professions'

const mapStateToProps = ({ profile, professions }) => ({
  professionsList: professions.list,
  profileData: profile.data
})

const mapDispatchToProps = {
  rateStudent,
  loadProfessionSubjects
}

export const RatingList = connect(mapStateToProps, mapDispatchToProps)(Self)