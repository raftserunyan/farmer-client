import { connect } from 'react-redux'

import { TreatmentsPage as Self } from './TreatmentsPage'
import { loadTreatments, deleteTreatment } from 'redux/actions/treatments'
import { showModal } from 'redux/actions/modal'

const mapStateToProps = ({ treatments }) => ({
  treatments
})

const mapDispatchToProps = {
  showModal,
  loadTreatments,
  deleteTreatment
}

export const TreatmentsPage = connect(mapStateToProps, mapDispatchToProps)(Self)