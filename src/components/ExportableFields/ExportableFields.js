import React from 'react'
import { Formik } from 'formik'

import { Button, Checkbox } from 'ui'
import closeIcon from 'images/close.png'
import { sliceArrayIntoParts } from 'helpers'
import * as S from './ExportableFields.styles'

export const ExportableFields = ({ 
  fields,
  hideModal
}) => {

  const onSubmit = (values) => {
    
  }

  return (
    <S.FieldsFormContainer>
      <S.FormHeaderContainer>
        <S.HeaderTitle>
          Նշեք և դասավորեք դաշտերը
        </S.HeaderTitle>
        <S.CloseFormContainer onClick={hideModal}>
          <S.CloseFormIcon src={closeIcon}/>
        </S.CloseFormContainer>
      </S.FormHeaderContainer>
      <Formik
        onSubmit={onSubmit}
        initialValues={{ list: fields }}
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
                    sliceArrayIntoParts(values.list, 6).map((fieldsList, listIndex) => (
                      <S.FormRow>
                        { fieldsList.map((field, index) => (
                            <S.FormItem key={field.key} onClick={() => {
                              const fieldIndex = listIndex * 6 + index

                              setFieldValue('list', [
                                ...values.list.slice(0, fieldIndex),
                                {
                                  ...field,
                                  checked: !field.checked
                                },
                                ...values.list.slice(fieldIndex + 1)
                              ])
                            }}>
                              <Checkbox
                                checked={field.checked}
                              />
                              <S.FieldName>
                                { field.name }
                              </S.FieldName>
                            </S.FormItem>
                        ))}
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