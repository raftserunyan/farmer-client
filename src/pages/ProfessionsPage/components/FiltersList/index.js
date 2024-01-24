import { connect } from 'react-redux'

import { FiltersList as Self } from './FiltersList'
import { loadProfessions } from 'redux/actions/professions'

const mapDispatchToProps = {
  loadProfessions
}

export const FiltersList = connect(null, mapDispatchToProps)(Self)