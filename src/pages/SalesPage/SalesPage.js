import React from 'react';

import { Table } from 'components';
import { Layout } from 'components/Layout';
import * as S from './SalesPage.styles';
import { SalesForm } from './components/SalesForm';
import { tableColumns } from 'constants/tableColumns';
import { FiltersList } from './components/FiltersList';

export const SalesPage = ({
	sales,
	loadSales,
	deleteSale,
}) => {
	return (
		<Layout>
			<S.SalesPageContainer>
				<Table
					title='Վաճառքներ'
					data={sales.list}
					total={sales.list.length}
					loadData={loadSales}
					onDelete={deleteSale}
					FormComponent={SalesForm}
					FilterComponent={FiltersList}
					columns={tableColumns.sales}
				/>
			</S.SalesPageContainer>
		</Layout>
	);
};
