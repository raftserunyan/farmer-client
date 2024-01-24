import { connect } from 'react-redux'

import { InvestmentsPage as Self } from './InvestmentsPage'
import { loadInvestments, deleteInvestment } from 'redux/actions/investments'
import { showModal } from 'redux/actions/modal'

const mapStateToProps = ({ investments }) => ({
  investments
})

const mapDispatchToProps = {
  showModal,
  loadInvestments,
  deleteInvestment
}

export const InvestmentsPage = connect(mapStateToProps, mapDispatchToProps)(Self)