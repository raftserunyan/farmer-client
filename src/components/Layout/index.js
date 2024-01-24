import { connect } from 'react-redux'

import { Layout as Self } from './Layout'

const mapStateToProps = ({ auth, app }) => ({
  loggedIn: auth.loggedIn,
  appLoading: app.loading
})

export const Layout = connect(mapStateToProps)(Self)