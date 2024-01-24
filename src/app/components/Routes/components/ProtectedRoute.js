import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const ProtectedRouteComp = ({ loggedIn, ...rest }) => {
  return loggedIn
    ? <Route {...rest} />
    : <Redirect to='/login'/>
}

const mapStateToProps = ({ auth }) => ({
  loggedIn: auth.loggedIn
})

export const ProtectedRoute = connect(mapStateToProps)(ProtectedRouteComp)