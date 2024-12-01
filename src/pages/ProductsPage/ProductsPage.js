import React from 'react';

import { Table } from 'components';
import { Layout } from 'components/Layout';
import * as S from './ProductsPage.styles';
import { ProductForm } from './components/ProductForm';
import { tableColumns } from 'constants/tableColumns';
import { FiltersList } from './components/FiltersList';

export const ProductsPage = ({
	products,
	loadProducts,
	deleteProduct,
}) => {
	return (
		<Layout>
			<S.ProductsPageContainer>
				<Table
					title='Ապրանքներ'
					data={products.list}
					total={products.total}
					loadData={loadProducts}
					onDelete={deleteProduct}
					FormComponent={ProductForm}
					FilterComponent={FiltersList}
					columns={tableColumns.product}
				/>
			</S.ProductsPageContainer>
		</Layout>
	);
};
