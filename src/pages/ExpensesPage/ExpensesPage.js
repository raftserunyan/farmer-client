import React from 'react';

import { Table } from 'components';
import { Layout } from 'components/Layout';
import * as S from './ExpensesPage.styles';
import { ExpensesForm } from './components/ExpensesForm';
import { tableColumns } from 'constants/tableColumns';
import { FiltersList } from './components/FiltersList';

export const ExpensesPage = ({
	expenses,
	loadExpenses,
	deleteExpense,
}) => {
	return (
		<Layout>
			<S.ExpensesPageContainer>
				<Table
					title='Ծախսեր'
					data={expenses.list}
					total={expenses.length}
					loadData={loadExpenses}
					onDelete={deleteExpense}
					FormComponent={ExpensesForm}
					FilterComponent={FiltersList}
					columns={tableColumns.expense}
				/>
			</S.ExpensesPageContainer>
		</Layout>
	);
};
