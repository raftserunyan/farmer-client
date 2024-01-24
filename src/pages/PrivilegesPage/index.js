import { connect } from 'react-redux'

import { PrivilegesPage as Self } from './PrivilegesPage'
import { loadPrivileges, deletePrivilege } from 'redux/actions/privileges'
import { showModal } from 'redux/actions/modal'

const mapStateToProps = ({ privileges }) => ({
  privileges
})

const mapDispatchToProps = {
  showModal,
  loadPrivileges,
  deletePrivilege
}

export const PrivilegesPage = connect(mapStateToProps, mapDispatchToProps)(Self)