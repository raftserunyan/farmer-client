import React, { useEffect, useMemo } from 'react'

import * as S from './CommissariatForm.styles'
import closeIcon from 'images/close.png'
import { Input, Button } from 'ui'
import { Formik } from 'formik'
import { initialValues, validationSchema } from './CommissariatForm.config'
import { history } from 'system/history'

export const CommissariatForm = ({
  hideModal,
  editCommissariat,
  createCommissariat,
  editableData,
  loadCommunities,
  communities
}) => {
  useEffect(() => {
    loadCommunities(history.location.search)
  }, [loadCommunities])

  const formActionType = useMemo(() => editableData
    ? 'Փոփոխել'
    : 'Ավելացնել'
  , [editableData])

  const onSubmit = (values) => {
    if (editableData) {
      editCommissariat(values)
    } else {
      createCommissariat(values)
    }
    hideModal()
  }

  return (
    <S.CommissariatsFormContainer>
      <S.FormHeaderContainer>
        <S.HeaderTitle>
          {formActionType} զինկոմիսարիատ   
        </S.HeaderTitle>
        <S.CloseFormContainer onClick={hideModal}>
          <S.CloseFormIcon src={closeIcon}/>
        </S.CloseFormContainer>
      </S.FormHeaderContainer>
      <Formik
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        initialValues={editableData || initialValues}
      >
        {
          ({
            values,
            errors,
            touched,
            handleSubmit,
            setFieldValue
          }) => {
            return (
              <S.FormContentContainer>
                <Input
                  value={values.name}
                  placeholder='Անվանում'
                  onChange={(val) => setFieldValue('name', val)}
                  onEnter={handleSubmit}
                  autoFocus
                  error={touched.name && errors.name}
                />
                <Input
                  value={values.number}
                  placeholder='Համար'
                  type='number'
                  onChange={(val) => setFieldValue('number', val)}
                  onEnter={handleSubmit}
                  error={touched.number && errors.number}
                />
                <Input
                  value={values.description}
                  placeholder='Նկարագրություն'
                  type='description'
                  onChange={(val) => setFieldValue('description', val)}
                  onEnter={handleSubmit}
                  error={touched.description && errors.description }
                />
                <S.ButtonsContainer>
                  <Button className='bordered' onClick={hideModal}>
                    Չեղարկել
                  </Button>
                  <Button onClick={handleSubmit}>
                    Հաստատել
                  </Button>
                </S.ButtonsContainer>
              </S.FormContentContainer>
            )
          }
        }
      </Formik>
    </S.CommissariatsFormContainer>
  )
}


