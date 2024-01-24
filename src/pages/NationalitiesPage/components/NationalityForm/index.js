import { connect } from 'react-redux'

import { NationalityForm as Self } from './NationalityForm'

import {
  editNationality,
  createNationality
} from 'redux/actions/nationalities'

const mapDispatchToProps = {
  editNationality,
  createNationality
}

export const NationalityForm = connect(null, mapDispatchToProps)(Self)