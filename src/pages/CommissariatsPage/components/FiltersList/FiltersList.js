import React from 'react'
import { Button, Input } from 'ui'
import { Formik } from 'formik'

import * as S from './FiltersList.styles'
import { initialValues } from './FiltersList.config'
import { useSearchParams } from 'hooks/useSearchParams'
import { Filter } from 'components'

export const FiltersList = ({ hideModal, loadCommissariats }) => {
  const [searchParams, updateSearchParams] = useSearchParams()

  const search = (values) => {
    hideModal()
    loadCommissariats(values)
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
            setValues,
            setFieldValue,
          }) => {            
            return (
              <S.FiltersListContainer>
                <S.List>
                  <Input
                    value={values.name}
                    placeholder='Անվանում'
                    onChange={(val) => setFieldValue('name', val)}
                    onEnter={handleSubmit}
                    autoFocus
                  />
                  <Input
                    value={values.number}
                    placeholder='Համար'
                    onChange={(val) => setFieldValue('number', val)}
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