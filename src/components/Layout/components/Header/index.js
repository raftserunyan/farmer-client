import { connect } from 'react-redux'

import { Header as Self } from './Header'
import { logout } from 'redux/actions/auth'

const mapStateToProps = ({ auth }) => ({
  user: auth.user
})

const mapDispatchToProps = {
  logout
}

export const Header = connect(mapStateToProps, mapDispatchToProps)(Self)