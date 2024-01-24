import { connect } from 'react-redux'

import { FiltersList as Self } from './FiltersList'
import { loadRegions } from 'redux/actions/regions'

const mapDispatchToProps = {
  loadRegions
}

export const FiltersList = connect(null, mapDispatchToProps)(Self)