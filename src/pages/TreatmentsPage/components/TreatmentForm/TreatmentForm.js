import React, { useEffect, useMemo } from 'react'

import * as S from './TreatmentForm.styles'
import closeIcon from 'images/close.png'
import { Input, Button, Select } from 'ui'
import { Formik } from 'formik'
import { initialValues, validationSchema } from './TreatmentForm.config'
import { useDispatch, useSelector } from 'react-redux'
import { loadProducts } from 'redux/actions/products'

export const TreatmentForm = ({
  hideModal,
  editTreatment,
  createTreatment,
  editableData
}) => {
  const products = useSelector(state => state.products)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!products.loaded) dispatch(loadProducts())
  })

  const formActionType = useMemo(() => editableData
    ? 'Փոփոխել'
    : 'Ավելացնել'
  , [editableData])

  const onSubmit = (values) => {
    if (editableData) {
      editTreatment(values)
    } else {
      createTreatment(values)
    }

    hideModal()
  }
  return (
    <S.TreatmentFormContainer>
      <S.FormHeaderContainer>
        <S.HeaderTitle>
          {formActionType} բուժում   
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
            const selectedProduct = products.list.find(item => item.id === values.treatedProducts?.id)

            return (
              <S.FormContentContainer>
                <Input
                  value={values.drugName}
                  placeholder='Անվանում'
                  onChange={(val) => setFieldValue('drugName', val)}
                  onEnter={handleSubmit}
                  autoFocus
                  error={touched.drugName && errors.drugName}
                />
                <Input
                  value={values.drugWeight}
                  placeholder='Քանակ'
                  onChange={(val) => setFieldValue('drugWeight', val)}
                  onEnter={handleSubmit}
                  error={touched.drugWeight && errors.drugWeight}
                />
                <S.FormItem>
                  <Select
                    value={selectedProduct}
                    options={products.list}
                    placeholder='Ապրանքներ'
                    onChange={(val) => {
                      setFieldValue('treatedProducts', products.list.find(region => region.id === val?.value))
                      setFieldValue('treatedProductsIds', val?.value?.toString())
                    }}
                  />
                  {
                    errors.treatedProductsIds && touched.treatedProductsIds &&
                      <S.ErrorMessage>
                        { errors.treatedProductsIds }
                      </S.ErrorMessage>
                  }
                </S.FormItem>
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
    </S.TreatmentFormContainer>
  )
}
