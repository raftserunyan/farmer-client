import { connect } from 'react-redux'

import { SalesForm as Self } from './SalesForm'

import {
  editSale,
  createSale
} from 'redux/actions/sales'

const mapDispatchToProps = {
  editSale,
  createSale
}

export const SalesForm = connect(null, mapDispatchToProps)(Self)