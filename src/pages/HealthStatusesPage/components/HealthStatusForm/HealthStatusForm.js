import React, { useMemo } from 'react'

import * as S from './HealthStatusForm.styles'
import closeIcon from 'images/close.png'
import { Input, Button } from 'ui'
import { Formik } from 'formik'
import { initialValues, validationSchema } from './HealthStatusForm.config'

export const HealthStatusForm = ({
  hideModal,
  editHealthStatus,
  createHealthStatus,
  editableData
}) => {
  const formActionType = useMemo(() => editableData
    ? 'Փոփոխել'
    : 'Ավելացնել'
  , [editableData])

  const onSubmit = (values) => {
    if (editableData) {
      editHealthStatus(values)
    } else {
      createHealthStatus(values)
    }
    hideModal()
  }

  return (
    <S.HealthStatusFormContainer>
      <S.FormHeaderContainer>
        <S.HeaderTitle>
          {formActionType} առողջական վիճակ   
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
                  value={values.status}
                  placeholder='Անվանում'
                  onChange={(val) => setFieldValue('status', val)}
                  onEnter={handleSubmit}
                  autoFocus
                  error={touched.status && errors.status}
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
    </S.HealthStatusFormContainer>
  )
}