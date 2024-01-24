import { connect } from 'react-redux'

import { CommunitiesPage as Self } from './CommunitiesPage'
import { loadCommunities, deleteCommunity } from 'redux/actions/communities'
import { showModal } from 'redux/actions/modal'

const mapStateToProps = ({ communities }) => ({
  communities
})

const mapDispatchToProps = {
  showModal,
  loadCommunities,
  deleteCommunity
}

export const CommunitiesPage = connect(mapStateToProps, mapDispatchToProps)(Self)