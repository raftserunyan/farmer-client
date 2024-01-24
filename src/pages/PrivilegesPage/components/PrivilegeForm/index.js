import { connect } from 'react-redux'

import { PrivilegeForm as Self } from './PrivilegeForm'

import {
  editPrivilege,
  createPrivilege
} from 'redux/actions/privileges'

const mapDispatchToProps = {
  editPrivilege,
  createPrivilege
}

export const PrivilegeForm = connect(null, mapDispatchToProps)(Self)