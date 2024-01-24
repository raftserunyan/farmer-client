import React from 'react'

import { Table } from 'components'
import { Layout } from 'components/Layout'
import * as S from './InvestmentsPage.styles'
import { InvestmentForm } from './components/InvestmentForm'
import { tableColumns } from 'constants/tableColumns'
import { FiltersList } from './components/FiltersList'
import { imagesList } from './imagesList'
import { toast } from 'react-toastify'
import { pages } from './pages'

function onlyUnique(value, index, array) {
  return array.indexOf(value) === index;
}

export const InvestmentsPage = ({
  investments,
  loadInvestments,
  deleteInvestment
}) => {
  const images = imagesList.filter(onlyUnique)

  const copyImagePath = (imagePath) => {
    navigator.clipboard.writeText(imagePath)
    toast.success(pages[imagePath])
  }
    

  return (
    <Layout>
      <S.InvestmentsPageContainer>
        {/* <S.ImagesList>
          {
            images.map(image => (
              <S.ImageBlock onClick={() => copyImagePath(image)} key={image} src={image} />
            ))
          }
        </S.ImagesList> */}
        <Table
          title='Ներդրումներ'
          data={investments.list}
          total={investments.length}
          loadData={loadInvestments}
          onDelete={deleteInvestment}
          FormComponent={InvestmentForm}
          FilterComponent={FiltersList}
          columns={tableColumns.investment}
        />
      </S.InvestmentsPageContainer>
    </Layout>
  )
}
