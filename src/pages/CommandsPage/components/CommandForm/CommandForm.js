import React, { useMemo } from 'react'

import * as S from './CommandForm.styles'
import closeIcon from 'images/close.png'
import { Input, Button } from 'ui'
import { Formik } from 'formik'
import { initialValues, validationSchema } from './CommandForm.config'
import { FieldsForm } from '../FieldsForm'

export const CommandForm = (props) => {
  const {
    hideModal,
    showModal,
    formValues,
    editCommand,
    editableData,
    createCommand,
    changeableFields
  } = props

  const formActionType = useMemo(() => editableData
    ? 'Փոփոխել'
    : 'Ավելացնել'
  , [editableData])

  const onSubmit = (values) => {
    if (editableData) {
      editCommand({ ...values, changeableColumns: changeableFields})
    } else {
      createCommand({ ...values, changeableColumns: changeableFields})
    }
    hideModal()
  }
 
  return (
    <S.CommandFormContainer>
      <S.FormHeaderContainer>
        <S.HeaderTitle>
          {formActionType} հրաման
        </S.HeaderTitle>
        <S.CloseFormContainer onClick={hideModal}>
          <S.CloseFormIcon src={closeIcon}/>
        </S.CloseFormContainer>
      </S.FormHeaderContainer>
      <Formik
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        initialValues={formValues || editableData || initialValues}
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
                  autoFocus
                  error={touched.name && errors.name }
                />
                <Button onClick={() => showModal(FieldsForm,
                  {
                    commandFormProps: {
                      ...props,
                      formValues: values
                    },
                    editableData: editableData?.changeableColumns
                  }
                )}>
                  Փոփոխելի դաշտեր
                </Button>
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
    </S.CommandFormContainer>
  )
}