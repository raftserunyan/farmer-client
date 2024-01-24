import React, { useMemo } from 'react'

import * as S from './ExpensesForm.styles'
import closeIcon from 'images/close.png'
import { Input, Button } from 'ui'
import { Formik } from 'formik'
import { initialValues, validationSchema } from './ExpensesForm.config'

export const ExpensesForm = ({
  hideModal,
  editExpense,
  createExpense,
  editableData
}) => {
  const formActionType = useMemo(() => editableData
    ? 'Փոփոխել'
    : 'Ավելացնել'
  , [editableData])

  const onSubmit = (values) => {
    if (editableData) {
      editExpense(values)
    } else {
      createExpense(values)
    }

    hideModal()
  }
  return (
    <S.ExpensesFormContainer>
      <S.FormHeaderContainer>
        <S.HeaderTitle>
          {formActionType} ծախս   
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
            console.log(errors)
            return (
              <S.FormContentContainer>
                <Input
                  value={values.expenseName}
                  placeholder='Անվանում'
                  onChange={(val) => setFieldValue('expenseName', val)}
                  onEnter={handleSubmit}
                  autoFocus
                  error={touched.expenseName && errors.expenseName}
                />
                <Input
                  value={values.expenseAmount}
                  placeholder='Գումար'
                  onChange={(val) => setFieldValue('expenseAmount', val)}
                  onEnter={handleSubmit}
                  error={touched.expenseAmount && errors.expenseAmount}
                />
                <Input
                  value={values.expensePurpose}
                  placeholder='Նպատակ'
                  onChange={(val) => setFieldValue('expensePurpose', val)}
                  onEnter={handleSubmit}
                  error={touched.expensePurpose && errors.expensePurpose}
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
    </S.ExpensesFormContainer>
  )
}
