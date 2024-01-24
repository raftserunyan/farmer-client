import { connect } from 'react-redux'

import { FiltersList as Self } from './FiltersList'
import { loadCommissariats } from 'redux/actions/commissariats'

const mapDispatchToProps = {
  loadCommissariats
}

export const FiltersList = connect(null, mapDispatchToProps)(Self)