import React from 'react'


import { Table } from 'components'
import { Layout } from 'components/Layout'
import { FiltersList } from './components/FiltersList'
import { tableColumns } from 'constants/tableColumns'
import * as S from './UsersPage.styles'
import { UserForm } from './components/UserForm'


export const UsersPage = ({
  users,
  loadUsers,
  deleteUser
}) => {
  return (
    <Layout>
      <S.UsersPageContainer>
        <Table
          title='Օգտատերեր'
          data={users.list}
          total={users.total}
          loadData={loadUsers}
          onDelete={deleteUser}
          FormComponent={UserForm}
          FilterComponent={FiltersList}
          columns={tableColumns.users}
        />
      </S.UsersPageContainer>
    </Layout>
  )
}
