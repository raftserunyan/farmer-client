import React from 'react'


import { Table } from 'components'
import { Layout } from 'components/Layout'
import { tableColumns } from 'constants/tableColumns'
import * as S from './CommandsPage.styles'
import { CommandForm } from './components/CommandForm'
import { FiltersList } from './components/FiltersList'

export const CommandsPage = ({
  commands,
  deleteCommand,
  loadCommands
}) => {
  return (
    <Layout>
      <S.CommandsPageContainer>
        <Table
          title='Հրամաններ'
          data={commands.list}
          total={commands.total}
          loadData={loadCommands}
          onDelete={deleteCommand}
          FormComponent={CommandForm}
          FilterComponent={FiltersList}
          columns={tableColumns.commands}
          columnConfig={{
            width: 405
          }}
        />
      </S.CommandsPageContainer>
    </Layout>
  )
}
