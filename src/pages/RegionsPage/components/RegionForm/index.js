import { connect } from 'react-redux'

import { RegionForm as Self } from './RegionForm'

import {
  editRegion,
  createRegion
} from 'redux/actions/regions'

const mapDispatchToProps = {
  editRegion,
  createRegion
}

export const RegionForm = connect(null, mapDispatchToProps)(Self)