import React from 'react'

import { Table } from 'components'
import { Layout } from 'components/Layout'
import { tableColumns } from 'constants/tableColumns'
import * as S from './RegionsPage.styles'
import { RegionForm } from './components/RegionForm'
import { FiltersList } from './components/FiltersList'

export const RegionsPage = ({
  regions,
  deleteRegion,
  loadRegions
}) => {
  return (
    <Layout>
      <S.RegionsPageContainer>
        <Table
          title='Մարզեր'
          data={regions.list}
          loadData={loadRegions}
          total={regions.total}
          onDelete={deleteRegion}
          FormComponent={RegionForm}
          FilterComponent={FiltersList}
          columns={tableColumns.region}
        />
      </S.RegionsPageContainer>
    </Layout>
  )
}
