import React, { useEffect } from 'react'


import { Table } from 'components'
import { Layout } from 'components/Layout'
import { tableColumns } from 'constants/tableColumns'
import * as S from './GroupsPage.styles'
import { GroupForm } from './components/GroupForm'
import { FiltersList } from './components/FiltersList'

export const GroupsPage = ({
  groups,
  deleteGroup,
  loadGroups,
  loadProfessions
}) => {
  useEffect(() => {
    loadProfessions()
  }, [loadProfessions])

  return (
    <Layout>
      <S.GroupsPageContainer>
        <Table
          title='Խմբեր'
          data={groups.list}
          isGroupsPage={true}
          total={groups.total}
          loadData={loadGroups}
          onDelete={deleteGroup}
          FormComponent={GroupForm}
          FilterComponent={FiltersList}
          columns={tableColumns.groups}
        />
      </S.GroupsPageContainer>
    </Layout>
  )
}
