import { connect } from 'react-redux'

import { CommissariatsPage as Self } from './CommissariatsPage'
import { loadCommissariats, deleteCommissariat } from 'redux/actions/commissariats'
import { showModal } from 'redux/actions/modal'

const mapStateToProps = ({ commissariats }) => ({
  commissariats
})

const mapDispatchToProps = {
  showModal,
  loadCommissariats,
  deleteCommissariat
}

export const CommissariatsPage = connect(mapStateToProps, mapDispatchToProps)(Self)