import React from 'react';

import { Table } from 'components';
import { Layout } from 'components/Layout';
import * as S from './TreatmentsPage.styles';
import { TreatmentForm } from './components/TreatmentForm';
import { tableColumns } from 'constants/tableColumns';
import { FiltersList } from './components/FiltersList';

export const TreatmentsPage = ({
	treatments,
	loadTreatments,
	deleteTreatment,
}) => {
	return (
		<Layout>
			<S.TreatmentsPageContainer>
				<Table
					title='Բուժումներ և Պարարտացում'
					data={treatments.list}
					total={treatments.total}
					loadData={loadTreatments}
					onDelete={deleteTreatment}
					FormComponent={TreatmentForm}
					FilterComponent={FiltersList}
					columns={tableColumns.treatment}
				/>
			</S.TreatmentsPageContainer>
		</Layout>
	);
};
