import React, { useMemo } from 'react'

import * as S from './InvestorForm.styles'
import closeIcon from 'images/close.png'
import { Input, Button } from 'ui'
import { Formik } from 'formik'
import { initialValues, validationSchema } from './InvestorForm.config'

export const InvestorForm = ({
  hideModal,
  editInvestor,
  createInvestor,
  editableData
}) => {
  const formActionType = useMemo(() => editableData
    ? 'Փոփոխել'
    : 'Ավելացնել'
  , [editableData])

  const onSubmit = (values) => {
    if (editableData) {
      editInvestor(values)
    } else {
      createInvestor(values)
    }

    hideModal()
  }
  return (
    <S.InvestorFormContainer>
      <S.FormHeaderContainer>
        <S.HeaderTitle>
          {formActionType} ներդրող   
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
                  value={values.phoneNumber}
                  placeholder='Հեռախոսահամար'
                  onChange={(val) => setFieldValue('phoneNumber', val)}
                  onEnter={handleSubmit}
                  error={touched.phoneNumber && errors.phoneNumber}
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
    </S.InvestorFormContainer>
  )
}
