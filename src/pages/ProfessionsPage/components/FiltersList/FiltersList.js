import React from 'react'
import { Button, Input } from 'ui'
import { Formik } from 'formik'

import { Filter } from 'components'
import * as S from './FiltersList.styles'
import { initialValues } from './FiltersList.config'
import { useSearchParams } from 'hooks/useSearchParams'

export const FiltersList = ({ loadProfessions, hideModal }) => {
  const [searchParams, updateSearchParams] = useSearchParams()

  const search = (values) => {
    loadProfessions(values)
    hideModal()
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
                    value={values.name}
                    placeholder='Մասնագիտություն'
                    onChange={(val) => setFieldValue('name', val)}
                    onEnter={handleSubmit}
                    autoFocus
                  />
                  <Input
                    value={values.abbreviation}
                    placeholder='Հապավում'
                    onChange={(val) => setFieldValue('abbreviation', val)}
                    onEnter={handleSubmit}
                  />
                  <Input
                    value={values.fee}
                    placeholder='Վճար'
                    onChange={(val) => setFieldValue('fee', val)}
                    onEnter={handleSubmit}
                  />
                  <Input
                    value={values.code}
                    placeholder='Կոդ'
                    onChange={(val) => setFieldValue('code', val)}
                    onEnter={handleSubmit}
                  />
                  <Input
                    value={values.number}
                    placeholder='Համար'
                    onChange={(val) => setFieldValue('number', val)}
                    onEnter={handleSubmit}
                  />
                  <Input
                    value={values.yearsCount}
                    placeholder='Տարիների քանակ'
                    onChange={(val) => setFieldValue('yearsCount', val)}
                    onEnter={handleSubmit}
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