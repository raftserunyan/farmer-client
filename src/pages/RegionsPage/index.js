import { connect } from 'react-redux'

import { RegionsPage as Self } from './RegionsPage'
import { loadRegions, deleteRegion } from 'redux/actions/regions'
import { showModal } from 'redux/actions/modal'

const mapStateToProps = ({ regions }) => ({
  regions
})

const mapDispatchToProps = {
  showModal,
  loadRegions,
  deleteRegion
}

export const RegionsPage = connect(mapStateToProps, mapDispatchToProps)(Self)