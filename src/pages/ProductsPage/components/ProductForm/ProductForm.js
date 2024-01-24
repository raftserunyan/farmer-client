import React, { useMemo } from 'react'

import * as S from './ProductForm.styles'
import closeIcon from 'images/close.png'
import { Input, Button } from 'ui'
import { Formik } from 'formik'
import { initialValues, validationSchema } from './ProductForm.config'

export const ProductForm = ({
  hideModal,
  editProduct,
  createProduct,
  editableData
}) => {
  const formActionType = useMemo(() => editableData
    ? 'Փոփոխել'
    : 'Ավելացնել'
  , [editableData])

  const onSubmit = (values) => {
    if (editableData) {
      editProduct(values)
    } else {
      createProduct(values)
    }

    hideModal()
  }
  return (
    <S.ProductFormContainer>
      <S.FormHeaderContainer>
        <S.HeaderTitle>
          {formActionType} ներդրում   
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
                  value={values.priceKG}
                  placeholder='Գին (կգ)'
                  onChange={(val) => setFieldValue('priceKG', val)}
                  onEnter={handleSubmit}
                  error={touched.priceKG && errors.priceKG}
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
    </S.ProductFormContainer>
  )
}
