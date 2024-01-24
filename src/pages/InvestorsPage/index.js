import { connect } from 'react-redux'

import { InvestorsPage as Self } from './InvestorsPage'
import { loadInvestors, deleteInvestor } from 'redux/actions/investors'
import { showModal } from 'redux/actions/modal'

const mapStateToProps = ({ investors }) => ({
  investors
})

const mapDispatchToProps = {
  showModal,
  loadInvestors,
  deleteInvestor
}

export const InvestorsPage = connect(mapStateToProps, mapDispatchToProps)(Self)