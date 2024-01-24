import React, { useMemo } from 'react'

import * as S from './UserForm.styles'
import closeIcon from 'images/close.png'
import { Input, Button } from 'ui'
import { Formik } from 'formik'
import { initialValues, getValidationSchema } from './UserForm.config'

export const UserForm = ({
  editUser,
  hideModal,
  createUser,
  editableData
}) => {
  const formActionType = useMemo(() => editableData
    ? 'Փոփոխել'
    : 'Ավելացնել'
  , [editableData])

  const onSubmit = (values) => {
    if (editableData) {
      editUser({
        ...values
      })
    } else {
      createUser(values)
    }
    hideModal()
  }

  return (
    <S.UserFormContainer>
      <S.FormHeaderContainer>
        <S.HeaderTitle>
          {formActionType} օգտատեր   
        </S.HeaderTitle>
        <S.CloseFormContainer onClick={hideModal}>
          <S.CloseFormIcon src={closeIcon}/>
        </S.CloseFormContainer>
      </S.FormHeaderContainer>
      <Formik
        onSubmit={onSubmit}
        validationSchema={getValidationSchema(editableData)}
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
                  value={values.surname}
                  placeholder='Ազգանուն'
                  onChange={(val) => setFieldValue('surname', val)}
                  onEnter={handleSubmit}
                  error={touched.surname && errors.surname}
                />
                <Input
                  value={values.username}
                  placeholder='Մուտքանուն'
                  onChange={(val) => setFieldValue('username', val)}
                  onEnter={handleSubmit}
                  error={touched.username && errors.username}
                />
                {
                  !editableData &&
                    <Input
                      type='password'
                      value={values.password}
                      placeholder='Գաղտնաբառ'
                      onChange={(val) => setFieldValue('password', val)}
                      onEnter={handleSubmit}
                      error={touched.password && errors.password}
                    />
                }
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
    </S.UserFormContainer>
  )
}