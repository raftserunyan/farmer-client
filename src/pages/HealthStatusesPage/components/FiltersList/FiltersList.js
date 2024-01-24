import React from 'react'
import { Button, Input } from 'ui'
import { Formik } from 'formik'

import * as S from './FiltersList.styles'
import { initialValues } from './FiltersList.config'
import { useSearchParams } from 'hooks/useSearchParams'
import { Filter } from 'components'

export const FiltersList = ({ hideModal, loadHealthStatuses }) => {
  const [searchParams, updateSearchParams] = useSearchParams()

  const search = (values) => {
    hideModal()
    loadHealthStatuses(values)
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
                    value={values.status}
                    placeholder='Անվանում'
                    onChange={(val) => setFieldValue('status', val)}
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