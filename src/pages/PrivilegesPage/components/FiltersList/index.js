import { connect } from 'react-redux'

import { FiltersList as Self } from './FiltersList'
import { loadPrivileges } from 'redux/actions/privileges'

const mapDispatchToProps = {
  loadPrivileges
}

export const FiltersList = connect(null, mapDispatchToProps)(Self)