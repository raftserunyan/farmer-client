import { connect } from 'react-redux'

import { HealthStatusForm as Self } from './HealthStatusForm'

import {
  editHealthStatus,
  createHealthStatus
} from 'redux/actions/healthStatuses'

const mapDispatchToProps = {
  editHealthStatus,
  createHealthStatus
}

export const HealthStatusForm = connect(null, mapDispatchToProps)(Self)