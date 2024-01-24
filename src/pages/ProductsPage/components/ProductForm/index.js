import { connect } from 'react-redux'

import { ProductForm as Self } from './ProductForm'

import {
  editProduct,
  createProduct
} from 'redux/actions/products'

const mapDispatchToProps = {
  editProduct,
  createProduct
}

export const ProductForm = connect(null, mapDispatchToProps)(Self)