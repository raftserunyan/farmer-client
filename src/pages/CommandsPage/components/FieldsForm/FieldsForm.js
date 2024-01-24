import React from 'react'

import * as S from './FieldsForm.styles'
import closeIcon from 'images/close.png'
import { Button, Checkbox } from 'ui'
import { Formik } from 'formik'
import { CommandForm } from '../CommandForm'
import { fields } from 'constants/fields'
import { setObjectValues, sliceArrayIntoParts } from 'helpers'

export const FieldsForm = ({ 
  showModal,
  hideModal,
  editableData,
  commandFormProps
}) => {

  const onSubmit = (values) => {
    showModal(CommandForm, {
      ...commandFormProps,
      changeableFields: setObjectValues(values, null)
    })
  }

  return (
    <S.FieldsFormContainer>
      <S.FormHeaderContainer>
        <S.HeaderTitle>
          Նշեք փոփոխելի դաշտերի արժեքները
        </S.HeaderTitle>
        <S.CloseFormContainer onClick={() => {
          showModal(CommandForm, { ...commandFormProps, changeableFields: {} })
        }}>
          <S.CloseFormIcon src={closeIcon}/>
        </S.CloseFormContainer>
      </S.FormHeaderContainer>
      <Formik
        onSubmit={onSubmit}
        initialValues={setObjectValues(editableData, true) || {}}
      >
        {
          ({
            values,
            handleSubmit,
            setFieldValue
          }) => {
            return (
              <S.FormContentContainer>
                <S.FormItemsList>
                  {
                    sliceArrayIntoParts(fields.student, 6).map(fieldsList => (
                      <S.FormRow>
                        { fieldsList.map(field => ((
                            <S.FormItem onClick={() => setFieldValue(field.key, !values[field.key])}>
                              <Checkbox
                                checked={values[field.key]}
                              />
                              <S.FieldName>
                                { field.name }
                              </S.FieldName>
                            </S.FormItem>
                          )))
                        }
                      </S.FormRow>
                    ))
                  }
                </S.FormItemsList>
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
    </S.FieldsFormContainer>
  )
}