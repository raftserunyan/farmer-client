import { connect } from 'react-redux'

import { UserForm as Self } from './UserForm'

import {
  editUser,
  createUser
} from 'redux/actions/users'

const mapDispatchToProps = {
  editUser,
  createUser
}

export const UserForm = connect(null, mapDispatchToProps)(Self)