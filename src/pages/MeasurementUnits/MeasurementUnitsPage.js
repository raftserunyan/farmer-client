import React from 'react';

import { Table } from 'components';
import { Layout } from 'components/Layout';
import * as S from './MeasurementUnitsPage.styles';
import { InvestorForm } from './components/InvestorForm';
import { tableColumns } from 'constants/tableColumns';
import { FiltersList } from './components/FiltersList';

export const MeasurementUnitsPage = ({
	measurementUnits,
	loadMeasurementUnits,
	deleteMeasurementUnit,
}) => {
	return (
		<Layout>
			<S.MeasurementUnitsPageContainer>
				<Table
					title='Չափման Միավորներ'
					data={measurementUnits.list}
					total={measurementUnits.length}
					loadData={loadMeasurementUnits}
					onDelete={deleteMeasurementUnit}
					FormComponent={InvestorForm}
					FilterComponent={FiltersList}
					columns={tableColumns.measurementUnits}
				/>
			</S.MeasurementUnitsPageContainer>
		</Layout>
	);
};
