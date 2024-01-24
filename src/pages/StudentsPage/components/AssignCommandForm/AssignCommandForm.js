import React, { useEffect } from 'react'
import { Formik } from 'formik'

import closeIcon from 'images/close.png'
import fieldsIcon from 'images/fields.png'
import * as S from './AssignCommandForm.styles'
import { Input, Button, Select, DatePicker } from 'ui'
import { initialValues, validationSchema } from './AssignCommandForm.config'
import { isObjectEmpty } from 'helpers'
import { ChangeableFieldsForm } from 'components'

export const AssignCommandForm = (props) => {
  const {
    hideModal,
    showModal,
    studentIds,
    formValues,
    loadCommands,
    commandsList,
    assignCommand
  } = props

  useEffect(() => {
    loadCommands()
  }, [loadCommands])

  const onSubmit = (values) => {
    const command = {
      ...values,
      studentIds,
    }

    if (!isObjectEmpty(values.changeableColumns) && values.changeableColumns.contactNumbers) {
      const { contactNumbers } = values.changeableColumns

      command.changeableColumns.contactNumbers = Array.isArray(contactNumbers)
      ? contactNumbers
      : contactNumbers.split(',').map(el => el.trim())
    }

    assignCommand(command)

    hideModal()
  }

  return (
    <S.AssignCommandFormContainer>
      <S.FormHeaderContainer>
        <S.HeaderTitle>
          Կցագրել հրաման
        </S.HeaderTitle>
        <S.CloseFormContainer onClick={hideModal}>
          <S.CloseFormIcon src={closeIcon}/>
        </S.CloseFormContainer>
      </S.FormHeaderContainer>
      <Formik
        onSubmit={onSubmit}
        initialValues={formValues || initialValues}
        validationSchema={validationSchema}
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
                <S.FormItemsList>
                  <Input
                    value={values.commandNumber}
                    placeholder='Հրամանի համար'
                    onChange={(val) => setFieldValue('commandNumber', val)}
                    onEnter={handleSubmit}
                    autoFocus
                    error={touched.commandNumber && errors.commandNumber}
                  />
                  <DatePicker
                    date={values.affectDate}
                    placeholder='Հրամանի ամսաթիվ'
                    onChange={(val) => setFieldValue('affectDate', val)}
                    error={touched.affectDate && errors.affectDate}
                  />
                  <S.FormItem>
                    <Select
                      value={values.selectedCommand}
                      options={commandsList}
                      placeholder='Հրաման'
                      onChange={(val) => {
                        setFieldValue('commandId', val?.value)
                        setFieldValue('selectedCommand', commandsList.find(command => command.id === val?.value))
                      }}
                      error={touched.commandId && errors.commandId}
                    />
                    {
                      !isObjectEmpty(values.selectedCommand?.changeableColumns) &&
                        <S.ChangeableColumnsButton title='Փոփոխելի դաշտեր' onClick={() => showModal(
                          ChangeableFieldsForm,
                          {
                            changeableColumns: values.changeableColumns || values.selectedCommand.changeableColumns,
                            assignCommandFormProps: { ...props, formValues: values }
                          })}
                        >
                          <img src={fieldsIcon} />
                        </S.ChangeableColumnsButton>
                    }
                  </S.FormItem>
                  {
                    values.selectedCommand && isObjectEmpty(values.selectedCommand?.changeableColumns) &&
                      <Input
                        value={values.description}
                        placeholder='Նկարագրություն'
                        onChange={(val) => setFieldValue('description', val)}
                        onEnter={handleSubmit}
                        autoFocus
                        error={touched.description && errors.description}
                      />
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
    </S.AssignCommandFormContainer>
  )
}
