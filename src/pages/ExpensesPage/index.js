import { connect } from 'react-redux'

import { ExpensesPage as Self } from './ExpensesPage'
import { loadExpenses, deleteExpense } from 'redux/actions/expenses'
import { showModal } from 'redux/actions/modal'

const mapStateToProps = ({ expenses }) => ({
  expenses
})

const mapDispatchToProps = {
  showModal,
  loadExpenses,
  deleteExpense
}

export const ExpensesPage = connect(mapStateToProps, mapDispatchToProps)(Self)