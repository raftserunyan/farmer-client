import { connect } from 'react-redux'

import { CustomersForm as Self } from './CustomersForm'

import {
  editCustomer,
  createCustomer
} from 'redux/actions/customers'

const mapDispatchToProps = {
  editCustomer,
  createCustomer
}

export const CustomersForm = connect(null, mapDispatchToProps)(Self)