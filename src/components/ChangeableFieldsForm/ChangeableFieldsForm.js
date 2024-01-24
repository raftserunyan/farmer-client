import React, { useEffect, useMemo } from 'react'
import { Formik } from 'formik'

import closeIcon from 'images/close.png'
import * as S from './ChangeableFieldsForm.styles'
import { initialValues, getValidationSchema } from './ChangeableFieldsForm.config'
import { FormLabelItem } from 'components/FormLabelItem'
import {
  Input,
  Button,
  Select,
  DatePicker
} from 'ui'
import { AssignCommandForm } from 'pages/StudentsPage/components/AssignCommandForm'

export const ChangeableFieldsForm = ({
  state,
  hideModal,
  showModal,
  loadAllData,
  changeableColumns,
  assignCommandFormProps
}) => {
  useEffect(() => {
    loadAllData()
  }, [loadAllData])

  const closeModal = () => {
    showModal(AssignCommandForm, { ...assignCommandFormProps })
  }

  const onSubmit = (values, a) => { 
    showModal(
      AssignCommandForm,
      {
        ...assignCommandFormProps,
        formValues: {
          ...assignCommandFormProps.formValues,
          changeableColumns: values
        }
      }
    )
  }

  const canSetFieldValue = (fieldName, component) => {
    if (!changeableColumns.hasOwnProperty(fieldName)) return null

    return component
  }

  return (
    <S.ChangeableFieldsFormContainer>
      <S.FormHeaderContainer>
        <S.HeaderTitle>
          Լրացրեք փոփոխվող դաշտերը
        </S.HeaderTitle>
        <S.CloseFormContainer onClick={closeModal}>
          <S.CloseFormIcon src={closeIcon}/>
        </S.CloseFormContainer>
      </S.FormHeaderContainer>
      <Formik
        onSubmit={onSubmit}
        validationSchema={getValidationSchema(changeableColumns)}
        initialValues={changeableColumns || initialValues}
      >
        {
          ({
            values,
            errors,
            touched,
            handleSubmit,
            setFieldValue
          }) => {  
            const selectedValues = {
              commissariat: state.commissariats.list.find(el => el.id === values.commissariatId),
              citizenship: state.citizenships.list.find(el => el.id === values.citizenshipId),
              healthStatus: state.healthStatuses.list.find(el => el.id === values.healthStatusId),
              nationality: state.nationalities.list.find(el => el.id === values.nationalityId),
              profession: state.professions.list.find(el => el.id === values.professionId),
              privilege: state.privileges.list.find(el => el.id === values.privilegeId),
              status: state.statuses.list.find(el => el.id === values.statusId),
              group: state.groups.list.find(el => el.id === values.groupId),
              registrationRegion: state.regions.list.find(el => el.id === values.registrationRegionId),
              registrationCommunity: this?.registrationRegion?.communities.find(el => el.id === values.registrationCommunityId),
              residentRegion: state.regions.list.find(el => el.id === values.residentRegionId),
              residentCommunity: this?.residentRegion?.communities.find(el => el.id === values.residentCommunityId)
            }

            values.selectedValues = selectedValues

            return (
              <S.FormContentContainer>
                <S.FormItemsList>
                  <S.FormRow>
                    {
                      [
                        canSetFieldValue(
                          'firstname',
                          <Input
                            value={values.firstname}
                            placeholder='Անուն'
                            onChange={(val) => setFieldValue('firstname', val)}
                            onEnter={handleSubmit}
                            autoFocus
                            error={touched.firstname && errors.firstname}
                          />
                        ),
                        canSetFieldValue(
                          'lastname',
                          <Input
                            value={values.lastname}
                            placeholder='Ազգանուն'
                            onChange={(val) => setFieldValue('lastname', val)}
                            onEnter={handleSubmit}
                            error={touched.lastname && errors.lastname}
                          />
                        ),
                        canSetFieldValue(
                          'fathername',
                          <Input
                            onEnter={handleSubmit}
                            placeholder='Հայրանուն'
                            value={values.fathername}
                            error={touched.fathername && errors.fathername}
                            onChange={(val) => setFieldValue('fathername', val)}
                          />
                        ),
                        canSetFieldValue(
                          'dateOfBirth',
                          <DatePicker
                            date={values.dateOfBirth}
                            error={touched.dateOfBirth && errors.dateOfBirth}
                            placeholder='Ծննդյան ամսաթիվ'
                            onChange={(val) => setFieldValue('dateOfBirth', val)}
                          />
                        ),
                        canSetFieldValue(
                          'groupId',
                          <Select
                            value={selectedValues.group}
                            accessorKey='number'
                            options={state.groups.list}
                            error={touched.groupId && errors.groupId}
                            placeholder='Խումբ'
                            onChange={(val) => setFieldValue('groupId', val?.value)}
                          />
                        ),
                        canSetFieldValue(
                          'acceptanceCommandNumber',
                          <Input
                            value={values.acceptanceCommandNumber}
                            placeholder='Ընդունման հրամանի համար'
                            onChange={(val) => setFieldValue('acceptanceCommandNumber', val)}
                            onEnter={handleSubmit}
                            error={touched.acceptanceCommandNumber && errors.acceptanceCommandNumber}
                          />
                        ),
                        canSetFieldValue(
                          'socialCardNumber',
                          <Input
                            value={values.socialCardNumber}
                            placeholder='Հանրային ծառայության համարանիշ'
                            onChange={(val) => setFieldValue('socialCardNumber', val)}
                            onEnter={handleSubmit}
                            error={touched.socialCardNumber && errors.socialCardNumber}
                          /> 
                        ),
                        canSetFieldValue(
                          'passportSeries',
                          <Input
                            value={values.passportSeries}
                            placeholder='Անձը հաստատող փաստաթուղթ'
                            onChange={(val) => setFieldValue('passportSeries', val)}
                            onEnter={handleSubmit}
                            error={touched.passportSeries && errors.passportSeries}
                          />
                        )
                      ]
                    }
                  </S.FormRow>
                  <S.FormRow>
                    {
                      [
                        canSetFieldValue(
                          'dateOfAcceptance',
                          <DatePicker
                            date={values.dateOfAcceptance}
                            placeholder='Ընդունման ամսաթիվ'
                            onChange={(val) => setFieldValue('dateOfAcceptance', val)}
                            error={touched.dateOfAcceptance && errors.dateOfAcceptance}
                          />
                        ),
                        canSetFieldValue(
                          'commissariatId',
                          <Select
                            value={selectedValues.commissariat}
                            options={state.commissariats.list}
                            placeholder='Զինկոմիսարիատ'
                            onChange={(val) => setFieldValue('commissariatId', val?.value)}
                            error={touched.commissariatId && errors.commissariatId}
                          />
                        ),
                        canSetFieldValue(
                          'statusId',
                          <Select
                            value={selectedValues.status}
                            options={state.statuses.list}
                            placeholder='Կարգավիճակ'
                            onChange={(val) => setFieldValue('statusId', val?.value)}
                            error={touched.statusId && errors.statusId}
                          />
                        ),
                        canSetFieldValue(
                          'healthStatusId',
                          <Select
                            value={selectedValues.healthStatus}
                            accessorKey='status'
                            options={state.healthStatuses.list}
                            placeholder='Առողջական վիճակ'
                            onChange={(val) => setFieldValue('healthStatusId', val?.value)}
                            error={touched.healthStatusId && errors.healthStatusId}
                          />
                        ),
                        canSetFieldValue(
                          'professionId',
                          <Select
                            value={selectedValues.profession}
                            accessorKey='abbreviation'
                            options={state.professions.list}
                            placeholder='Մասնագիտություն'
                            onChange={(val) => setFieldValue('professionId', val?.value)}
                            error={touched.professionId && errors.professionId}
                          />
                        ),
                        canSetFieldValue(
                          'privilegeId',
                          <Select
                            value={selectedValues.privilege}
                            options={state.privileges.list}
                            placeholder='Արտոնություն'
                            onChange={(val) => setFieldValue('privilegeId', val?.value)}
                            error={touched.privilegeId && errors.privilegeId}
                          />
                        ),
                        canSetFieldValue(
                          'nationalityId',
                          <Select
                            value={selectedValues.nationality}
                            options={state.nationalities.list}
                            placeholder='Ազգություն'
                            onChange={(val) => setFieldValue('nationalityId', val?.value)}
                            error={touched.nationalityId && errors.nationalityId}
                          />
                        ),
                        canSetFieldValue(
                          'citizenshipId',
                          <Select
                            value={selectedValues.citizenship}
                            accessorKey='country'
                            options={state.citizenships.list}
                            placeholder='Քաղաքացիություն'
                            onChange={(val) => setFieldValue('citizenshipId', val?.value)}
                            error={touched.citizenshipId && errors.citizenshipId}
                          />
                        ),
                        canSetFieldValue(
                          'contactNumbers',
                          <Input
                            value={values.contactNumbers}
                            placeholder='Հեռախոսահամարներ'
                            onChange={(val) => setFieldValue('contactNumbers', val)}
                            error={touched.contactNumbers && errors.contactNumbers}
                          />
                        )
                      ]
                    }
                  </S.FormRow>
                  <S.FormRow>
                    {
                      [
                        canSetFieldValue(
                          'registrationAddress',
                          <FormLabelItem label='Գրանցման հասցե'>
                            <Select
                              value={selectedValues.registrationRegion}
                              options={state.regions.list}
                              placeholder='Մարզ'
                              onChange={(val) => setFieldValue('registrationRegionId', val?.value)}
                              error={touched.registrationRegionId && errors.registrationRegionId}
                            />
                            <Select
                              value={selectedValues.registrationCommunity}
                              options={selectedValues.registrationRegion?.communities}
                              placeholder='Բնակավայր'
                              onChange={(val) => setFieldValue('registrationCommunityId', val?.value)}
                              error={touched.registrationCommunityId && errors.registrationCommunityId}
                            />
                            <Input
                              value={values.registrationAddress}
                              placeholder='Հասցե'
                              onChange={(val) => setFieldValue('registrationAddress', val)}
                              error={touched.registrationAddress && errors.registrationAddress}
                            />
                          </FormLabelItem>
                        ),
                        canSetFieldValue(
                          'residentAddress',
                          <FormLabelItem label='Բնակության հասցե'>
                            <Select
                              value={selectedValues.residentRegion}
                              options={state.regions.list}
                              placeholder='Մարզ'
                              onChange={(val) => setFieldValue('residentRegionId', val?.value)}
                              error={touched.residentRegionId && errors.residentRegionId}
                            />
                            <Select
                              value={selectedValues.residentCommunity}
                              options={selectedValues.residentRegion?.communities}
                              placeholder='Բնակավայր'
                              onChange={(val) => setFieldValue('residentCommunityId', val?.value)}
                              error={touched.residentCommunityId && errors.residentCommunityId}
                            />
                            <Input
                              value={values.residentAddress}
                              placeholder='Հասցե'
                              onChange={(val) => setFieldValue('residentAddress', val)}
                              error={touched.residentAddress && errors.residentAddress}
                            />
                          </FormLabelItem>
                        )
                      ]
                    }
                  </S.FormRow>
                </S.FormItemsList>
                <S.ButtonsContainer>
                  <Button className='bordered' onClick={closeModal}>
                    Չեղարկել
                  </Button>
                  <Button onClick={() => handleSubmit(values, { ads: 'sfdsfwef' })}>
                    Հաստատել
                  </Button>
                </S.ButtonsContainer>
              </S.FormContentContainer>
            )
          }
        }
      </Formik>
    </S.ChangeableFieldsFormContainer>
  )
}
