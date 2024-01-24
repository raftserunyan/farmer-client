import React, { useMemo } from 'react'

import * as S from './CustomersForm.styles'
import closeIcon from 'images/close.png'
import { Input, Button } from 'ui'
import { Formik } from 'formik'
import { initialValues, validationSchema } from './CustomersForm.config'

export const CustomersForm = ({
  hideModal,
  editCustomer,
  createCustomer,
  editableData
}) => {
  const formActionType = useMemo(() => editableData
    ? 'Փոփոխել'
    : 'Ավելացնել'
  , [editableData])

  const onSubmit = (values) => {
    if (editableData) {
      editCustomer(values)
    } else {
      createCustomer(values)
    }

    hideModal()
  }

  return (
    <S.CitizenshipFormContainer>
      <S.FormHeaderContainer>
        <S.HeaderTitle>
          {formActionType} հաճախորդ
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
                  placeholder='Անուն'
                  onChange={(val) => setFieldValue('name', val)}
                  onEnter={handleSubmit}
                  autoFocus
                  error={touched.name && errors.name}
                />
                <Input
                  value={values.address}
                  placeholder='Հասցե'
                  onChange={(val) => setFieldValue('address', val)}
                  onEnter={handleSubmit}
                  error={touched.address && errors.address}
                />
                <Input
                  value={values.phoneNumber}
                  placeholder='Հեռախոսահամար'
                  onChange={(val) => setFieldValue('phoneNumber', val)}
                  onEnter={handleSubmit}
                  error={touched.phoneNumber && errors.phoneNumber}
                />
                <Input
                  value={values.accountNumber}
                  placeholder='Հաշվի համար'
                  onChange={(val) => setFieldValue('accountNumber', val)}
                  onEnter={handleSubmit}
                  error={touched.accountNumber && errors.accountNumber}
                />
                <Input
                  value={values.hvhh}
                  placeholder='ՀՎՀՀ'
                  onChange={(val) => setFieldValue('hvhh', val)}
                  onEnter={handleSubmit}
                  error={touched.hvhh && errors.hvhh}
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
    </S.CitizenshipFormContainer>
  )
}