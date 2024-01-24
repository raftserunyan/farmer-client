import { connect } from 'react-redux'

import { CommunityForm as Self } from './CommunityForm'

import {
  editCommunity,
  createCommunity
} from 'redux/actions/communities'
import { loadRegions } from 'redux/actions/regions'

const mapStateToProps = ({ regions }) => ({
  regions
})

const mapDispatchToProps = {
  loadRegions,
  editCommunity,
  createCommunity
}

export const CommunityForm = connect(mapStateToProps, mapDispatchToProps)(Self)