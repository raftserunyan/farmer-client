import React, { useEffect } from 'react';

import { Table } from 'components';
import { Layout } from 'components/Layout';
import { tableColumns } from 'constants/tableColumns';
import * as S from './CommandsHistoryPage.styles';
import { FiltersList } from './components/FiltersList';

export const CommandsHistoryPage = ({
  commandsHistory,
  loadCommandsHistory
}) => {
  useEffect(() => {
    loadCommandsHistory();
  }, []);

  return (
    <Layout>
      <S.CommunitiesPageContainer>
        <Table
          title="Հրամանների պատմություն"
          data={commandsHistory.list}
          loadData={loadCommandsHistory}
          total={commandsHistory.total}
          FilterComponent={FiltersList}
          withoutDefaultActions={true}
          hasSelections={false}
          hideTooltip={true}
          columns={tableColumns.commandsHistory}
        />
      </S.CommunitiesPageContainer>
    </Layout>
  );
};
