import { connect } from 'react-redux'

import { CommissariatForm as Self } from './CommissariatForm'

import {
  editCommissariat,
  createCommissariat
} from 'redux/actions/commissariats'
import { loadCommunities } from 'redux/actions/communities'

const mapStateToProps = ({ communities }) => ({
  communities
})

const mapDispatchToProps = {
  loadCommunities,
  editCommissariat,
  createCommissariat
}

export const CommissariatForm = connect(mapStateToProps, mapDispatchToProps)(Self)