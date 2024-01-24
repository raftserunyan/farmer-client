import { connect } from 'react-redux'

import { SalesPage as Self } from './SalesPage'
import { loadSales, deleteSale } from 'redux/actions/sales'
import { showModal } from 'redux/actions/modal'

const mapStateToProps = ({ sales }) => ({
  sales
})

const mapDispatchToProps = {
  showModal,
  loadSales,
  deleteSale
}

export const SalesPage = connect(mapStateToProps, mapDispatchToProps)(Self)