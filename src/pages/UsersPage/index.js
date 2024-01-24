import { connect } from 'react-redux'

import { UsersPage as Self } from './UsersPage'
import { loadUsers, deleteUser } from 'redux/actions/users'
import { showModal } from 'redux/actions/modal'

const mapStateToProps = ({ users }) => ({
  users
})

const mapDispatchToProps = {
  showModal,
  loadUsers,
  deleteUser
}

export const UsersPage = connect(mapStateToProps, mapDispatchToProps)(Self)