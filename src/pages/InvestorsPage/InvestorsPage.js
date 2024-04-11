import React from 'react';

import { Table } from 'components';
import { Layout } from 'components/Layout';
import * as S from './InvestorsPage.styles';
import { InvestorForm } from './components/InvestorForm';
import { tableColumns } from 'constants/tableColumns';
import { FiltersList } from './components/FiltersList';
import { InvestorDetails } from './components/InvestorDetails';
import { useDispatch } from 'react-redux';
import detailsIcon from '../../images/details.png';
import { showModal } from 'redux/actions/modal';

export const InvestorsPage = ({
	investors,
	loadInvestors,
	deleteInvestor,
}) => {
	const dispatch = useDispatch();
	return (
		<Layout>
			<S.InvestorsPageContainer>
				<Table
					title='Ներդրողներ'
					data={investors.list}
					total={investors.total}
					loadData={loadInvestors}
					onDelete={deleteInvestor}
					FormComponent={InvestorForm}
					FilterComponent={FiltersList}
					columns={tableColumns.investor}
					customActions={selectedRows => [
						{
							icon: detailsIcon,
							title: 'Ներդրումներ և Ծախսեր',
							onClick: () =>
								dispatch(
									showModal(InvestorDetails, {
										investorId:
											selectedRows[0].original?.id,
									})
								),
						},
					]}
				/>
			</S.InvestorsPageContainer>
		</Layout>
	);
};
