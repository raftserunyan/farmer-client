import React from 'react'


import { Table } from 'components'
import { Layout } from 'components/Layout'
import { tableColumns } from 'constants/tableColumns'
import * as S from './PrivilegesPage.styles'
import { PrivilegeForm } from './components/PrivilegeForm'
import { FiltersList } from './components/FiltersList'

export const PrivilegesPage = ({
  privileges,
  deletePrivilege,
  loadPrivileges
}) => {
  return (
    <Layout>
      <S.PrivilegesPageContainer>
        <Table
          title='Արտոնություններ'
          data={privileges.list}
          total={privileges.total}
          loadData={loadPrivileges}
          onDelete={deletePrivilege}
          FormComponent={PrivilegeForm}
          FilterComponent={FiltersList}
          columns={tableColumns.privilege}
        />
      </S.PrivilegesPageContainer>
    </Layout>
  )
}
