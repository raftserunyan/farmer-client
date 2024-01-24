import { connect } from 'react-redux'


import { login } from 'redux/actions/auth'
import { LoginPage as Self } from './LoginPage'

const mapDispatchToProps = {
  login
}

export const LoginPage = connect(null, mapDispatchToProps)(Self)