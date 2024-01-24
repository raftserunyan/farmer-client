import { connect } from 'react-redux'

import { FiltersList as Self } from './FiltersList'
import { loadCommunities } from 'redux/actions/communities'
import { loadRegions } from 'redux/actions/regions'

const mapStateToProps = ({ regions }) => ({
  regionsList: regions.list
})

const mapDispatchToProps = {
  loadRegions,
  loadCommunities
}

export const FiltersList = connect(mapStateToProps, mapDispatchToProps)(Self)