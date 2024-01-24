import { connect } from 'react-redux'

import { TreatmentForm as Self } from './TreatmentForm'

import {
  editTreatment,
  createTreatment
} from 'redux/actions/treatments'

const mapDispatchToProps = {
  editTreatment,
  createTreatment
}

export const TreatmentForm = connect(null, mapDispatchToProps)(Self)