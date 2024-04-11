import React from 'react';

import { Table } from 'components';
import { Layout } from 'components/Layout';
import * as S from './InvestmentsPage.styles';
import { InvestmentForm } from './components/InvestmentForm';
import { tableColumns } from 'constants/tableColumns';
import { FiltersList } from './components/FiltersList';

export const InvestmentsPage = ({
	investments,
	loadInvestments,
	deleteInvestment,
}) => {
	return (
		<Layout>
			<S.InvestmentsPageContainer>
				{/* <S.ImagesList>
          {
            images.map(image => (
              <S.ImageBlock onClick={() => copyImagePath(image)} key={image} src={image} />
            ))
          }
        </S.ImagesList> */}
				<Table
					title='Ներդրումներ'
					data={investments.list}
					total={investments.total}
					loadData={loadInvestments}
					onDelete={deleteInvestment}
					FormComponent={InvestmentForm}
					FilterComponent={FiltersList}
					columns={tableColumns.investment}
				/>
			</S.InvestmentsPageContainer>
		</Layout>
	);
};
