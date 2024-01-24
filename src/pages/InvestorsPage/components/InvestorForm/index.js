import { connect } from 'react-redux'

import { InvestorForm as Self } from './InvestorForm'

import {
  editInvestor,
  createInvestor
} from 'redux/actions/investors'

const mapDispatchToProps = {
  editInvestor,
  createInvestor
}

export const InvestorForm = connect(null, mapDispatchToProps)(Self)