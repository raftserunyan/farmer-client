import { connect } from 'react-redux'

import { FiltersList as Self } from './FiltersList'
import { loadNationalities } from 'redux/actions/nationalities'

const mapDispatchToProps = {
  loadNationalities
}

export const FiltersList = connect(null, mapDispatchToProps)(Self)