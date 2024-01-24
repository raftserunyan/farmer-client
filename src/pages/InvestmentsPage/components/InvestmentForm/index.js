import { connect } from 'react-redux'

import { InvestmentForm as Self } from './InvestmentForm'

import {
  editInvestment,
  createInvestment
} from 'redux/actions/investments'

const mapDispatchToProps = {
  editInvestment,
  createInvestment
}

export const InvestmentForm = connect(null, mapDispatchToProps)(Self)