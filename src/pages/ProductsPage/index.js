import { connect } from 'react-redux'

import { ProductsPage as Self } from './ProductsPage'
import { loadProducts, deleteProduct } from 'redux/actions/products'
import { showModal } from 'redux/actions/modal'

const mapStateToProps = ({ products }) => ({
  products
})

const mapDispatchToProps = {
  showModal,
  loadProducts,
  deleteProduct
}

export const ProductsPage = connect(mapStateToProps, mapDispatchToProps)(Self)