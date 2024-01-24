import { connect } from 'react-redux'


import { Routes as Self } from './Routes'

const mapStateToProps = ({ auth }) => ({
  loggedIn: auth.loggedIn
})

export const Routes = connect(mapStateToProps)(Self)