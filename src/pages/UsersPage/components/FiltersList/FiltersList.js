import React from 'react'
import { Button, Input } from 'ui'
import { Formik } from 'formik'

import * as S from './FiltersList.styles'
import { initialValues } from './FiltersList.config'
import { useSearchParams } from 'hooks/useSearchParams'
import { Filter } from 'components'

export const FiltersList = ({ loadUsers, hideModal }) => {
  const [searchParams, updateSearchParams] = useSearchParams()

  const search = (values) => {
    hideModal()
    loadUsers(values)
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
                    placeholder='Անուն'
                    onChange={(val) => setFieldValue('name', val)}
                    onEnter={handleSubmit}
                    autoFocus
                  />
                  <Input
                    value={values.surname}
                    placeholder='Ազգանուն'
                    onChange={(val) => setFieldValue('surname', val)}
                    onEnter={handleSubmit}
                  />
                  <Input
                    value={values.username}
                    placeholder='Մուտքանուն'
                    onChange={(val) => setFieldValue('username', val)}
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