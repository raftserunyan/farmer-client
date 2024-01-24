import { connect } from 'react-redux'

import { FiltersList as Self } from './FiltersList'
import { loadUsers } from 'redux/actions/users'

const mapDispatchToProps = {
  loadUsers
}

export const FiltersList = connect(null, mapDispatchToProps)(Self)