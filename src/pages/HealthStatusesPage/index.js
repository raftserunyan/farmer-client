import { connect } from 'react-redux'

import { HealthStatusesPage as Self } from './HealthStatusesPage'
import { loadHealthStatuses, deleteHealthStatus } from 'redux/actions/healthStatuses'
import { showModal } from 'redux/actions/modal'

const mapStateToProps = ({ healthStatuses }) => ({
  healthStatuses
})

const mapDispatchToProps = {
  showModal,
  loadHealthStatuses,
  deleteHealthStatus
}

export const HealthStatusesPage = connect(mapStateToProps, mapDispatchToProps)(Self)