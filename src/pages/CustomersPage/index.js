import { connect } from 'react-redux'

import { CustomersPage as Self } from './CustomersPage'
import {
  loadCustomers,
  deleteCustomer
} from 'redux/actions/customers'
import { showModal } from 'redux/actions/modal'

const mapStateToProps = ({ customers }) => ({
  customers
})

const mapDispatchToProps = {
  showModal,
  loadCustomers,
  deleteCustomer
}

export const CustomersPage = connect(mapStateToProps, mapDispatchToProps)(Self)