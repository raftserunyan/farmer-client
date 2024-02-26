import React from 'react';

import { Table } from 'components';
import { Layout } from 'components/Layout';
import * as S from './TargetsPage.styles';
import { TargetForm } from './components/TargetForm';
import { tableColumns } from 'constants/tableColumns';
import { FiltersList } from './components/FiltersList';

export const TargetsPage = ({
	targets,
	loadTargets,
	deleteTarget,
}) => {
	return (
		<Layout>
			<S.TargetsPageContainer>
				<Table
					title='Նպատակներ'
					data={targets.list}
					total={targets.length}
					loadData={loadTargets}
					onDelete={deleteTarget}
					FormComponent={TargetForm}
					FilterComponent={FiltersList}
					columns={tableColumns.measurementUnits}
				/>
			</S.TargetsPageContainer>
		</Layout>
	);
};
