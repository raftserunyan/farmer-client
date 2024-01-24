import { connect } from 'react-redux'

import { ProfessionForm as Self } from './ProfessionForm'

import {
  editProfession,
  createProfession
} from 'redux/actions/professions'

const mapDispatchToProps = {
  editProfession,
  createProfession
}

export const ProfessionForm = connect(null, mapDispatchToProps)(Self)