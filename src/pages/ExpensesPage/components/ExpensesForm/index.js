import { connect } from 'react-redux'

import { ExpensesForm as Self } from './ExpensesForm'

import {
  editExpense,
  createExpense
} from 'redux/actions/expenses'

const mapDispatchToProps = {
  editExpense,
  createExpense
}

export const ExpensesForm = connect(null, mapDispatchToProps)(Self)