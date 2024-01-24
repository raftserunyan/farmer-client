import { connect } from 'react-redux'

import { FiltersList as Self } from './FiltersList'
import { loadHealthStatuses } from 'redux/actions/healthStatuses'

const mapDispatchToProps = {
  loadHealthStatuses
}

export const FiltersList = connect(null, mapDispatchToProps)(Self)