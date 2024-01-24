import React, { useEffect, useMemo } from 'react'

import * as S from './InvestmentForm.styles'
import closeIcon from 'images/close.png'
import { Input, Button, Select } from 'ui'
import { Formik } from 'formik'
import { initialValues, validationSchema } from './InvestmentForm.config'
import { useDispatch, useSelector } from 'react-redux'
import { loadInvestors } from 'redux/actions/investors'

export const InvestmentForm = ({
  hideModal,
  editInvestment,
  createInvestment,
  editableData
}) => {
  const investors = useSelector(state => state.investors)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!investors.loaded) dispatch(loadInvestors())
  })

  const formActionType = useMemo(() => editableData
    ? 'Փոփոխել'
    : 'Ավելացնել'
  , [editableData])

  const onSubmit = (values) => {
    if (editableData) {
      editInvestment(values)
    } else {
      createInvestment(values)
    }

    hideModal()
  }
  return (
    <S.InvestmentFormContainer>
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
            const selectedInvestor = investors.list.find(investor => investor.id === values.investorId)

            return (
              <S.FormContentContainer>
                <Input
                  value={values.amount}
                  placeholder='Գումար'
                  onChange={(val) => setFieldValue('amount', val)}
                  onEnter={handleSubmit}
                  autoFocus
                  error={touched.amount && errors.amount}
                />
                <S.FormItem>
                  <Select
                    value={selectedInvestor}
                    options={investors.list}
                    placeholder='Ներդրող'
                    onChange={(val) => {
                      setFieldValue('investor', investors.list.find(investor => investor.id === val?.value))
                      setFieldValue('investorId', val?.value)
                    }}
                  />
                  {
                    errors.investorId && touched.investorId &&
                      <S.ErrorMessage>
                        { errors.investorId }
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
    </S.InvestmentFormContainer>
  )
}
