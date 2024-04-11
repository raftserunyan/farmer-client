import React, { useEffect, useState } from 'react';

import * as S from './InvestorDetails.styles';
import closeIcon from 'images/close.png';
import { Button } from 'ui';
import { TabMenu, Table } from 'components';
import { tableColumns } from 'constants/tableColumns';
import { HttpService } from 'services';

const tabs = ['Ներդրումներ', 'Ծախսեր'];

export const InvestorDetails = ({
	investorId,
	hideModal,
}) => {
	console.log(investorId, 'investor');
	const [investor, setInvestor] = useState({});

	const loadInvestorData = async () => {
		const data = await HttpService.get(
			`investors/${investorId}`
		);

		setInvestor(data);
	};

	useEffect(() => {
		loadInvestorData();
	}, []);
	console.log(investor, 'sdiofno');
	return (
		<S.InvestorDetailsContainer>
			<TabMenu tabs={tabs}>
				<S.TabContainer>
					<S.TotalAmount>
						Ընդհանուր Ինվեստիցիա –{' '}
						{investor.totalAmountOfInvestments ?? 0}
					</S.TotalAmount>
					<Table
						title=''
						data={investor.investments}
						total={investor.investments?.length}
						pageRowCount={4}
						withoutCheckboxes={true}
						withoutDefaultActions={true}
						columns={tableColumns.investments}
					/>
				</S.TabContainer>
				<S.TabContainer>
					<S.TotalAmount>
						Ընդհանուր Ծախս –{' '}
						{investor.totalAmountOfExpenses ?? 0}
					</S.TotalAmount>
					<Table
						title=''
						data={investor.expenses}
						total={investor.expenses?.length}
						pageRowCount={4}
						withoutCheckboxes={true}
						withoutDefaultActions={true}
						columns={tableColumns.investorExpenses}
					/>
				</S.TabContainer>
			</TabMenu>
			<S.CloseFormContainer onClick={hideModal}>
				<S.CloseFormIcon src={closeIcon} />
			</S.CloseFormContainer>
		</S.InvestorDetailsContainer>
	);
};
