import React from 'react'

import { Table } from 'components'
import { Layout } from 'components/Layout'
import * as S from './InvestorsPage.styles'
import { InvestorForm } from './components/InvestorForm'
import { tableColumns } from 'constants/tableColumns'
import { FiltersList } from './components/FiltersList'

export const InvestorsPage = ({
  investors,
  loadInvestors,
  deleteInvestor
}) => {
  return (
    <Layout>
      <S.InvestorsPageContainer>
        <Table
          title='Ներդրողներ'
          data={investors.list}
          total={investors.length}
          loadData={loadInvestors}
          onDelete={deleteInvestor}
          FormComponent={InvestorForm}
          FilterComponent={FiltersList}
          columns={tableColumns.investor}
        />
      </S.InvestorsPageContainer>
    </Layout>
  )
}
