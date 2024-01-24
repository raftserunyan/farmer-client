import React from 'react'


import { Table } from 'components'
import { Layout } from 'components/Layout'
import { tableColumns } from 'constants/tableColumns'
import * as S from './CustomersPage.styles'
import { CustomersForm } from './components/CustomersForm'
import { FiltersList } from './components/FiltersList'

export const CustomersPage = ({
  loadCustomers,
  deleteCustomer,
  customers
}) => {
  return (
    <Layout>
      <S.CitizenshipPageContainer>
        <Table
          title='Հաճախորդներ'
          data={customers.list}
          total={customers.length}
          loadData={loadCustomers}
          onDelete={deleteCustomer}
          FormComponent={CustomersForm}
          FilterComponent={FiltersList}
          columns={tableColumns.customer}
        />
      </S.CitizenshipPageContainer>
    </Layout>
  )
}
