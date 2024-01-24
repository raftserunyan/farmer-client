import React from 'react'
import { Button, Input } from 'ui'
import { Formik } from 'formik'

import { Filter } from 'components'
import * as S from './FiltersList.styles'
import { initialValues } from './FiltersList.config'
import { useSearchParams } from 'hooks/useSearchParams'

export const FiltersList = ({ loadStatuses, hideModal }) => {
  const [searchParams, updateSearchParams] = useSearchParams()

  const search = (values) => {
    hideModal()
    loadStatuses(values)
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
                    placeholder='Կարգավիճակ'
                    onChange={(val) => setFieldValue('name', val)}
                    onEnter={handleSubmit}
                    autoFocus
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