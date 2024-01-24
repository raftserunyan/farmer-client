import React from 'react'

import { Table } from 'components'
import { Layout } from 'components/Layout'
import { tableColumns } from 'constants/tableColumns'
import * as S from './CommissariatsPage.styles'
import { CommissariatForm } from './components/CommissariatForm'
import { FiltersList } from './components/FiltersList'

export const CommissariatsPage = ({
  commissariats,
  deleteCommissariat,
  loadCommissariats
}) => {
  return (
    <Layout>
      <S.CommissariatsPageContainer>
        <Table
          title='Զինկոմիսարիատներ'
          data={commissariats.list}
          total={commissariats.total}
          loadData={loadCommissariats}
          onDelete={deleteCommissariat}
          FormComponent={CommissariatForm}
          FilterComponent={FiltersList}
          columns={tableColumns.commissariat}
        />
      </S.CommissariatsPageContainer>
    </Layout>
  )
}
