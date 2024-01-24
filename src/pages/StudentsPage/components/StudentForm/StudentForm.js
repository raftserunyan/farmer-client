import React, { useEffect, useMemo, useState } from 'react';
import { Formik } from 'formik';

import closeIcon from 'images/close.png';
import * as S from './StudentForm.styles';
import { initialValues, getValidationSchema } from './StudentForm.config';
import { FormLabelItem } from 'components/FormLabelItem';
import { Input, Button, Select, DatePicker, Checkbox } from 'ui';
import { genders } from 'constants/genders';
import { educationStatuses } from 'constants/educationStatuses';
import { passportTypes } from 'constants/passportTypes';
import { educationBasis } from 'constants/educationBasis';
import { Steps } from 'components/Steps';
import { setObjectValues } from 'helpers';

export const StudentForm = ({
  state,
  hideModal,
  editStudent,
  loadAllData,
  editableData,
  createStudent
}) => {
  const [formCurrentStep, setFormCurrentStep] = useState(0);

  useEffect(() => {
    loadAllData();
  }, [loadAllData]);

  const formActionType = useMemo(
    () => (editableData ? 'Փոփոխել' : 'Ավելացնել'),
    [editableData]
  );

  const onSubmit = (values) => {
    if (editableData) {
      editStudent(values);
    } else {
      createStudent(values);
    }
    hideModal();
  };

  const setAddressesValuesSame = (setFieldValue, key, value) =>
    setFieldValue(key, value);

  return (
    <S.StudentFormContainer>
      <S.FormHeaderContainer>
        <S.HeaderTitle>{formActionType} ուսանող</S.HeaderTitle>
        <S.CloseFormContainer onClick={hideModal}>
          <S.CloseFormIcon src={closeIcon} />
        </S.CloseFormContainer>
      </S.FormHeaderContainer>
      <Formik
        onSubmit={onSubmit}
        validationSchema={getValidationSchema(formCurrentStep)}
        initialValues={editableData || initialValues}
      >
        {({
          values,
          errors,
          touched,
          handleSubmit,
          setFieldValue,
          validateForm,
          setErrors,
          setTouched
        }) => {
          const selectedCommissariat = state.commissariats.list.find(
            (el) => el.id === values.commissariatId
          );
          const selectedCitizenship = state.citizenships.list.find(
            (el) => el.id === values.citizenshipId
          );
          const selectedHealthStatus = state.healthStatuses.list.find(
            (el) => el.id === values.healthStatusId
          );
          const selectedNationality = state.nationalities.list.find(
            (el) => el.id === values.nationalityId
          );
          const selectedStatus = state.statuses.list.find(
            (el) => el.id === values.statusId
          );
          const selectedGroup = state.groups.list.find(
            (el) => el.id === values.groupId
          );
          const selectedPrivilege = state.privileges.list.find(
            (el) => el.id === values.privilegeId
          );

          const selectedRegistrationRegion = state.regions.list.find(
            (el) => el.id === values.registrationRegionId
          );
          const selectedRegistrationCommunity =
            selectedRegistrationRegion?.communities.find(
              (el) => el.id === values.registrationCommunityId
            );

          const selectedResidentRegion = state.regions.list.find(
            (el) => el.id === values.residentRegionId
          );
          const selectedResidentCommunity =
            selectedResidentRegion?.communities.find(
              (el) => el.id === values.residentCommunityId
            );

          const selectedGender = genders.find(
            (gender) => gender.id === values.gender
          );
          const selectedPassportType = passportTypes.find(
            (type) => type.id === values.passportType
          );
          const selectedEducationStatus = educationStatuses.find(
            (status) => status.value === values.educationStatus
          );
          const selectedEducationBasis = educationBasis.find(
            (base) => base.value === values.educationBasis
          );
          console.log({ errors, values });
          return (
            <S.FormContentContainer>
              <Steps
                onClose={hideModal}
                onSubmit={handleSubmit}
                validate={validateForm}
                setErrors={(errors) => {
                  setTouched(setObjectValues(errors, true));
                  setErrors(errors);
                }}
                onStepChange={(step) => setFormCurrentStep(step)}
              >
                <S.FormItemsList>
                  <S.FormRow>
                    <Input
                      value={values.firstname}
                      placeholder="Անուն"
                      onChange={(val) => setFieldValue('firstname', val)}
                      onEnter={handleSubmit}
                      autoFocus
                      error={touched.firstname && errors.firstname}
                    />
                    <Input
                      value={values.lastname}
                      placeholder="Ազգանուն"
                      onChange={(val) => setFieldValue('lastname', val)}
                      onEnter={handleSubmit}
                      error={touched.lastname && errors.lastname}
                    />
                    <Input
                      onEnter={handleSubmit}
                      placeholder="Հայրանուն"
                      value={values.fathername}
                      error={touched.fathername && errors.fathername}
                      onChange={(val) => setFieldValue('fathername', val)}
                    />
                    <Input
                      value={values.acceptanceCommandNumber}
                      placeholder="Ընդունման հրամանի համար"
                      onChange={(val) =>
                        setFieldValue('acceptanceCommandNumber', val)
                      }
                      onEnter={handleSubmit}
                      error={
                        touched.acceptanceCommandNumber &&
                        errors.acceptanceCommandNumber
                      }
                    />
                    <Select
                      value={selectedStatus}
                      options={state.statuses.list}
                      placeholder="Կարգավիճակ"
                      onChange={(val) => setFieldValue('statusId', val?.value)}
                      error={touched.statusId && errors.statusId}
                    />
                  </S.FormRow>
                  <S.FormRow>
                    <DatePicker
                      date={values.dateOfAcceptance}
                      placeholder="Ընդունման ամսաթիվ"
                      onChange={(val) => setFieldValue('dateOfAcceptance', val)}
                      error={
                        touched.dateOfAcceptance && errors.dateOfAcceptance
                      }
                    />
                    <DatePicker
                      date={values.dateOfBirth}
                      error={touched.dateOfBirth && errors.dateOfBirth}
                      placeholder="Ծննդյան ամսաթիվ"
                      onChange={(val) => setFieldValue('dateOfBirth', val)}
                    />
                    <Select
                      value={selectedGroup}
                      accessorKey="number"
                      options={state.groups.list}
                      error={touched.groupId && errors.groupId}
                      placeholder="Խումբ"
                      onChange={(val) => setFieldValue('groupId', val?.value)}
                    />
                    {selectedGroup && (
                      <Input
                        disabled={true}
                        value={selectedGroup.profession.abbreviation}
                      />
                    )}
                    <Input
                      value={values.socialCardNumber}
                      placeholder="Հանրային ծառայության համարանիշ"
                      onChange={(val) => setFieldValue('socialCardNumber', val)}
                      onEnter={handleSubmit}
                      error={
                        touched.socialCardNumber && errors.socialCardNumber
                      }
                    />
                    <Select
                      value={selectedCommissariat}
                      options={state.commissariats.list}
                      placeholder="Զինկոմիսարիատ"
                      onChange={(val) =>
                        setFieldValue('commissariatId', val?.value)
                      }
                      error={touched.commissariatId && errors.commissariatId}
                    />
                  </S.FormRow>
                </S.FormItemsList>
                <S.FormItemsList>
                  <S.FormRow>
                    <Select
                      value={selectedPrivilege}
                      options={state.privileges.list}
                      placeholder="Արտոնություն"
                      onChange={(val) =>
                        setFieldValue('privilegeId', val?.value)
                      }
                      error={touched.privilegeId && errors.privilegeId}
                    />
                    <Select
                      value={selectedEducationBasis}
                      options={educationBasis}
                      accessorKey="label"
                      placeholder="Կրթության հիմք"
                      onChange={(val) =>
                        setFieldValue('educationBasis', val?.value)
                      }
                      error={touched.educationBasis && errors.educationBasis}
                    />
                    <Select
                      value={selectedNationality}
                      options={state.nationalities.list}
                      placeholder="Ազգություն"
                      onChange={(val) =>
                        setFieldValue('nationalityId', val?.value)
                      }
                      error={touched.nationalityId && errors.nationalityId}
                    />
                    <Select
                      value={selectedCitizenship}
                      accessorKey="country"
                      options={state.citizenships.list}
                      placeholder="Քաղաքացիություն"
                      onChange={(val) =>
                        setFieldValue('citizenshipId', val?.value)
                      }
                      error={touched.citizenshipId && errors.citizenshipId}
                    />
                    <Input
                      value={values.contactNumbers}
                      placeholder="Հեռախոսահամարներ"
                      onChange={(val) => setFieldValue('contactNumbers', val)}
                      error={touched.contactNumbers && errors.contactNumbers}
                    />
                    <Select
                      value={selectedHealthStatus}
                      accessorKey="status"
                      options={state.healthStatuses.list}
                      placeholder="Առողջական վիճակ"
                      onChange={(val) =>
                        setFieldValue('healthStatusId', val?.value)
                      }
                      error={touched.healthStatusId && errors.healthStatusId}
                    />
                  </S.FormRow>
                  <S.FormRow>
                    <FormLabelItem label="Անձը հաստատող փաստաթուղթ">
                      <Select
                        value={selectedPassportType}
                        placeholder="Անձը հաստատող փաստաթղթի տեսակ"
                        options={passportTypes}
                        accessorKey="label"
                        onChange={(val) =>
                          setFieldValue('passportType', val?.value)
                        }
                        error={touched.passportType && errors.passportType}
                      />
                      {selectedPassportType && (
                        <>
                          <Input
                            value={values.passportSeries}
                            placeholder="Անձը հաստատող փաստաթղթի համար"
                            onChange={(val) =>
                              setFieldValue('passportSeries', val)
                            }
                            onEnter={handleSubmit}
                            error={
                              touched.passportSeries && errors.passportSeries
                            }
                          />
                          <Input
                            value={values.passportIssuedBy}
                            placeholder="Ում կողմից է տրված"
                            onChange={(val) =>
                              setFieldValue('passportIssuedBy', val)
                            }
                            onEnter={handleSubmit}
                            error={
                              touched.passportIssuedBy &&
                              errors.passportIssuedBy
                            }
                          />
                          <DatePicker
                            date={values.passportDateOfIssue}
                            placeholder="Տրման ամսաթիվը"
                            onChange={(val) =>
                              setFieldValue('passportDateOfIssue', val)
                            }
                            error={
                              touched.passportDateOfIssue &&
                              errors.passportDateOfIssue
                            }
                          />
                          <DatePicker
                            date={values.validTill}
                            placeholder="Վավեր է մինչև"
                            onChange={(val) => setFieldValue('validTill', val)}
                            error={touched.validTill && errors.validTill}
                          />
                        </>
                      )}
                    </FormLabelItem>
                    <Select
                      value={selectedEducationStatus}
                      options={educationStatuses}
                      placeholder="Ուսման ձև"
                      onChange={(val) =>
                        setFieldValue('educationStatus', val?.value)
                      }
                      accessorKey="label"
                      error={touched.educationStatus && errors.educationStatus}
                    />
                    <Select
                      value={selectedGender}
                      placeholder="Սեռ"
                      options={genders}
                      accessorKey="label"
                      onChange={(val) => setFieldValue('gender', val?.value)}
                      error={touched.gender && errors.gender}
                    />
                  </S.FormRow>
                </S.FormItemsList>
                <S.FormItemsList>
                  <S.FormRow>
                    <FormLabelItem label="Գրանցման հասցե">
                      <Select
                        value={selectedRegistrationRegion}
                        options={state.regions.list}
                        placeholder="Մարզ"
                        onChange={(val) => {
                          setFieldValue('registrationRegionId', val?.value);
                          if (values.isSameAddresses)
                            setAddressesValuesSame(
                              setFieldValue,
                              'residentRegionId',
                              val?.value
                            );
                        }}
                        error={
                          touched.registrationRegionId &&
                          errors.registrationRegionId
                        }
                      />
                      <Select
                        value={selectedRegistrationCommunity}
                        options={selectedRegistrationRegion?.communities}
                        placeholder="Բնակավայր"
                        onChange={(val) => {
                          setFieldValue('registrationCommunityId', val?.value);
                          if (values.isSameAddresses)
                            setAddressesValuesSame(
                              setFieldValue,
                              'residentCommunityId',
                              val?.value
                            );
                        }}
                        error={
                          touched.registrationCommunityId &&
                          errors.registrationCommunityId
                        }
                      />
                      <Input
                        value={values.registrationAddress}
                        placeholder="Հասցե"
                        onChange={(val) => {
                          setFieldValue('registrationAddress', val);
                          if (values.isSameAddresses)
                            setAddressesValuesSame(
                              setFieldValue,
                              'residentAddress',
                              val
                            );
                        }}
                        error={
                          touched.registrationAddress &&
                          errors.registrationAddress
                        }
                      />
                    </FormLabelItem>
                    <S.SameAddressContainer>
                      <Checkbox
                        label="Բնակվում է նույն հասցեում"
                        checked={values.isSameAddresses}
                        onChange={() => {
                          if (values.isSameAddresses) {
                            setFieldValue('residentRegionId', null);
                            setFieldValue('residentCommunityId', null);
                            setFieldValue('residentAddress', '');
                          } else {
                            setAddressesValuesSame(
                              setFieldValue,
                              'residentRegionId',
                              values.registrationRegionId
                            );
                            setAddressesValuesSame(
                              setFieldValue,
                              'residentCommunityId',
                              values.registrationCommunityId
                            );
                            setAddressesValuesSame(
                              setFieldValue,
                              'residentAddress',
                              values.registrationAddress
                            );
                          }
                          setFieldValue(
                            'isSameAddresses',
                            !values.isSameAddresses
                          );
                        }}
                      />
                    </S.SameAddressContainer>
                  </S.FormRow>
                  <S.FormRow>
                    <FormLabelItem
                      label="Բնակության հասցե"
                      disabled={values.isSameAddresses}
                    >
                      <Select
                        value={selectedResidentRegion}
                        options={state.regions.list}
                        placeholder="Մարզ"
                        onChange={(val) =>
                          setFieldValue('residentRegionId', val?.value)
                        }
                        error={
                          touched.residentRegionId && errors.residentRegionId
                        }
                      />
                      <Select
                        value={selectedResidentCommunity}
                        options={selectedResidentRegion?.communities}
                        placeholder="Բնակավայր"
                        onChange={(val) =>
                          setFieldValue('residentCommunityId', val?.value)
                        }
                        error={
                          touched.residentCommunityId &&
                          errors.residentCommunityId
                        }
                      />
                      <Input
                        value={values.residentAddress}
                        placeholder="Հասցե"
                        onChange={(val) =>
                          setFieldValue('residentAddress', val)
                        }
                        error={
                          touched.residentAddress && errors.residentAddress
                        }
                      />
                    </FormLabelItem>
                  </S.FormRow>
                </S.FormItemsList>
              </Steps>
            </S.FormContentContainer>
          );
        }}
      </Formik>
    </S.StudentFormContainer>
  );
};
