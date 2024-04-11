import React from 'react';

import { Table } from 'components';
import * as S from './CreditsPage.styles';
import { Layout } from 'components/Layout';
import { tableColumns } from 'constants/tableColumns';

export const CreditsPage = ({ credits, loadCredits }) => {
	return (
		<Layout>
			<S.CreditsPageContainer>
				<Table
					title='Պարտքեր'
					data={credits.list}
					total={credits.total}
					loadData={loadCredits}
					columns={tableColumns.credits}
				/>
			</S.CreditsPageContainer>
		</Layout>
	);
};
