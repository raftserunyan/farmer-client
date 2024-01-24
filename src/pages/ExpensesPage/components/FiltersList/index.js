import { connect } from 'react-redux'

import { FiltersList as Self } from './FiltersList'
import { loadInvestments } from 'redux/actions/investments'

const mapDispatchToProps = {
  loadInvestments
}

export const FiltersList = connect(null, mapDispatchToProps)(Self)