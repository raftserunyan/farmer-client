import React, { useMemo } from 'react'

import * as S from './ProfessionForm.styles'
import closeIcon from 'images/close.png'
import { Input, Button } from 'ui'
import { Formik } from 'formik'
import { initialValues, validationSchema } from './ProfessionForm.config'

export const ProfessionForm = ({
  hideModal,
  editProfession,
  createProfession,
  editableData
}) => {
  const formActionType = useMemo(() => editableData
    ? 'Փոփոխել'
    : 'Ավելացնել'
  , [editableData])

  const onSubmit = (values) => {
    if (editableData) {
      editProfession({
        ...values,
        number: +values.number,
        freePlacesCount: +values.freePlacesCount
      })
    } else {
      createProfession(values)
    }
    hideModal()
  }

  return (
    <S.ProfessionFormContainer>
      <S.FormHeaderContainer>
        <S.HeaderTitle>
          {formActionType} մասնագիտություն   
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
                  value={values.abbreviation}
                  placeholder='Հապավում'
                  onChange={(val) => setFieldValue('abbreviation', val)}
                  onEnter={handleSubmit}
                  error={touched.abbreviation && errors.abbreviation}
                />
                <Input
                  value={values.code}
                  placeholder='Կոդ'
                  onChange={(val) => setFieldValue('code', val)}
                  onEnter={handleSubmit}
                  error={touched.code && errors.code}
                />
                <Input
                  value={values.yearsCount}
                  placeholder='Տարիների քանակ'
                  onChange={(val) => setFieldValue('yearsCount', val)}
                  onEnter={handleSubmit}
                  error={touched.yearsCount && errors.yearsCount}
                />
                <Input
                  value={values.number}
                  placeholder='Համար'
                  onChange={(val) => setFieldValue('number', val)}
                  onEnter={handleSubmit}
                  error={touched.number && errors.number}
                />
                <Input
                  value={values.fee}
                  placeholder='Վճար'
                  onChange={(val) => setFieldValue('fee', val)}
                  onEnter={handleSubmit}
                  error={touched.fee && errors.fee}
                />
                <Input
                  value={values.freePlacesCount}
                  placeholder='Անվճար տեղերի քանակ'
                  onChange={(val) => setFieldValue('freePlacesCount', val)}
                  onEnter={handleSubmit}
                  error={touched.freePlacesCount && errors.freePlacesCount}
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
    </S.ProfessionFormContainer>
  )
}