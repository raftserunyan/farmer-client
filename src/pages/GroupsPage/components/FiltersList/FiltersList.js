import React, { useEffect } from 'react'
import { Button, Input, Select } from 'ui'
import { Formik } from 'formik'

import * as S from './FiltersList.styles'
import { initialValues } from './FiltersList.config'
import { Filter } from 'components'
import { useSearchParams } from 'hooks/useSearchParams'

export const FiltersList = ({
  hideModal,
  professionsList,
  loadProfessions,
  loadGroups
}) => {
  const [searchParams, updateSearchParams] = useSearchParams()

  useEffect(() => {
    loadProfessions()
  }, [])

  const search = (values) => {
    hideModal()
    loadGroups(values)
    updateSearchParams(values)
  }

  return (
    <Filter>
      <Formik
        onSubmit={search}
        initialValues={searchParams || initialValues}
      >
        {
          ({
            values,
            resetForm,
            handleSubmit,
            setFieldValue,
          }) => {
            return (
              <S.FiltersListContainer>
                <S.List>
                  <Input
                    value={values.number}
                    placeholder='Խմբի համար'
                    onEnter={handleSubmit}
                    onChange={(val) => setFieldValue('number', val)}
                  />
                  <Input
                    value={values.openedAt}
                    placeholder='Ստեղծման տարեթիվ'
                    onEnter={handleSubmit}
                    onChange={(val) => setFieldValue('openedAt', val)}
                  />
                  <Select
                    options={professionsList}
                    accessorKey='abbreviation'
                    placeholder='Մասնագիտություն'
                    value={values.professionId}
                    onChange={(val) => setFieldValue('professionId', val?.value)}
                  />
                </S.List>
                <S.ActionsContainer>
                  <Button className='bordered' onClick={() => {
                    resetForm()
                    search()
                  }}>
                    Մաքրել
                  </Button>
                  <Button onClick={handleSubmit}>
                    Փնտրել
                  </Button>
                </S.ActionsContainer>
              </S.FiltersListContainer>
            )
          }
        }
      </Formik>
    </Filter>
  )
}