import React, { useEffect } from 'react';
import { Button, DatePicker, Input, Select } from 'ui';
import { Formik } from 'formik';

import { FormLabelItem } from 'components/FormLabelItem';
import * as S from './FiltersList.styles';

import { initialValues } from './FiltersList.config';
import { Filter } from 'components';
import { useSearchParams } from 'hooks/useSearchParams';

export const FiltersList = ({
  state,
  hideModal,
  loadAllData,
  loadCommands,
  loadStudents
}) => {
  const [searchParams, updateSearchParams] = useSearchParams();

  useEffect(() => {
    loadAllData();
    loadCommands();
  }, [loadAllData, loadCommands]);

  const search = (values) => {
    loadStudents(values);
    hideModal();
    updateSearchParams(values);
  };

  return (
    <Filter>
      <Formik onSubmit={search} initialValues={searchParams || initialValues}>
        {({ values, resetForm, handleSubmit, setFieldValue }) => {
          const selectedCommand = state.commands.list.find(
            (el) => el.id === +values.commandId
          );
          const selectedGroup = state.groups.list.find(
            (el) => el.id === +values.groupId
          );
          const selectedCommissariat = state.commissariats.list.find(
            (el) => el.id === +values.commissariatId
          );
          const selectedCitizenship = state.citizenships.list.find(
            (el) => el.id === +values.citizenshipId
          );
          const selectedHealthStatus = state.healthStatuses.list.find(
            (el) => el.id === +values.healthStatusId
          );
          const selectedNationality = state.nationalities.list.find(
            (el) => el.id === +values.nationalityId
          );
          const selectedProfession = state.professions.list.find(
            (el) => el.id === +values.professionId
          );
          const selectedStatus = state.statuses.list.find(
            (el) => el.id === +values.statusId
          );
          const selectedPrivilege = state.privileges.list.find(
            (el) => el.id === values.privilegeId
          );

          const selectedRegistrationRegion = state.regions.list.find(
            (el) => el.id === +values.registrationRegionId
          );
          const selectedRegistrationCommunity =
            selectedRegistrationRegion?.communities.find(
              (el) => el.id === +values.registrationCommunityId
            );

          const selectedResidentRegion = state.regions.list.find(
            (el) => el.id === +values.residentRegionId
          );
          const selectedResidentCommunity =
            selectedResidentRegion?.communities.find(
              (el) => el.id === +values.residentCommunityId
            );

          return (
            <S.FiltersListContainer className="FiltersListContainer">
              <S.List>
                <Input
                  value={values.firstname}
                  placeholder="Անուն"
                  onChange={(val) => setFieldValue('firstname', val)}
                  onEnter={handleSubmit}
                  autoFocus
                />
                <Input
                  value={values.lastname}
                  placeholder="Ազգանուն"
                  onChange={(val) => setFieldValue('lastname', val)}
                  onEnter={handleSubmit}
                />
                <Input
                  value={values.fathername}
                  placeholder="Հայրանուն"
                  onChange={(val) => setFieldValue('fathername', val)}
                  onEnter={handleSubmit}
                />
                <FormLabelItem label="Գրանցման հասցե">
                  <Select
                    value={selectedRegistrationRegion}
                    options={state.regions.list}
                    placeholder="Մարզ"
                    onChange={(val) =>
                      setFieldValue('registrationRegionId', val?.value)
                    }
                  />
                  <Select
                    value={selectedRegistrationCommunity}
                    options={selectedRegistrationRegion?.communities}
                    placeholder="Բնակավայր"
                    onChange={(val) =>
                      setFieldValue('registrationCommunityId', val?.value)
                    }
                  />
                  <S.FormItem>
                    <Input
                      value={values.registrationAddress}
                      placeholder="Հասցե"
                      onChange={(val) =>
                        setFieldValue('registrationAddress', val)
                      }
                    />
                  </S.FormItem>
                </FormLabelItem>
                <FormLabelItem label="Բնակության հասցե">
                  <Select
                    value={selectedResidentRegion}
                    options={state.regions.list}
                    placeholder="Մարզ"
                    onChange={(val) =>
                      setFieldValue('residentRegionId', val?.value)
                    }
                  />
                  <Select
                    value={selectedResidentCommunity}
                    options={selectedResidentRegion?.communities}
                    placeholder="Բնակավայր"
                    onChange={(val) =>
                      setFieldValue('residentCommunityId', val?.value)
                    }
                  />
                  <S.FormItem>
                    <Input
                      value={values.residentAddress}
                      placeholder="Հասցե"
                      onChange={(val) => setFieldValue('residentAddress', val)}
                    />
                  </S.FormItem>
                </FormLabelItem>
                <FormLabelItem label="Կցագրված հրամաններ">
                  <S.FormItem>
                    <Select
                      value={selectedCommand}
                      options={state.commands.list}
                      placeholder="Հրաման"
                      onChange={(val) => setFieldValue('commandId', val?.value)}
                    />
                    <S.FormItem className="Command">
                      <DatePicker
                        placeholder="Սկիզբ"
                        date={values.commandStartDate}
                        onChange={(val) =>
                          setFieldValue('commandStartDate', val)
                        }
                      />
                      <DatePicker
                        placeholder="Վերջ"
                        date={values.commandEndDate}
                        onChange={(val) => setFieldValue('commandEndDate', val)}
                      />
                    </S.FormItem>
                  </S.FormItem>
                </FormLabelItem>
                <Select
                  value={selectedStatus}
                  options={state.statuses.list}
                  placeholder="Կարգավիճակ"
                  onChange={(val) => setFieldValue('statusId', val?.value)}
                />
                {/* <FormLabelItem label='Ուսանողի կարգավիճակ'>
                    <S.FormItem>
                      <S.FormItem className='Command'>
                        <DatePicker
                          placeholder='Սկիզբ'
                          date={values.statusStartDate}
                          onChange={(val) => setFieldValue('statusStartDate', val)}
                        />
                        <DatePicker
                          placeholder='Վերջ'
                          date={values.statusEndDate}
                          onChange={(val) => setFieldValue('statusEndDate', val)}
                        />
                      </S.FormItem>
                    </S.FormItem>
                  </FormLabelItem> */}
                <Input
                  value={values.acceptanceCommandNumber}
                  placeholder="Ընդունման հրամանի համար"
                  onChange={(val) =>
                    setFieldValue('acceptanceCommandNumber', val)
                  }
                  onEnter={handleSubmit}
                />
                <Select
                  value={selectedGroup}
                  accessorKey="number"
                  options={state.groups.list}
                  placeholder="Խումբ"
                  onChange={(val) => setFieldValue('groupId', val?.value)}
                />
                <Select
                  value={selectedCitizenship}
                  accessorKey="country"
                  options={state.citizenships.list}
                  placeholder="Քաղաքացիություն"
                  onChange={(val) => setFieldValue('citizenshipId', val?.value)}
                />
                <Select
                  value={selectedNationality}
                  options={state.nationalities.list}
                  placeholder="Ազգություն"
                  onChange={(val) => setFieldValue('nationalityId', val?.value)}
                />
                <Select
                  accessorKey="abbreviation"
                  value={selectedProfession}
                  options={state.professions.list}
                  placeholder="Մասնագիտություն"
                  onChange={(val) => setFieldValue('professionId', val?.value)}
                />
                <Select
                  value={selectedHealthStatus}
                  accessorKey="status"
                  options={state.healthStatuses.list}
                  placeholder="Առողջական վիճակ"
                  onChange={(val) =>
                    setFieldValue('healthStatusId', val?.value)
                  }
                />
                <Select
                  value={selectedCommissariat}
                  options={state.commissariats.list}
                  placeholder="Զինկոմիսարիատ"
                  onChange={(val) =>
                    setFieldValue('commissariatId', val?.value)
                  }
                />
              </S.List>
              <S.ActionsContainer>
                <Button
                  className="bordered"
                  onClick={() => {
                    resetForm();
                    search();
                  }}
                >
                  Մաքրել
                </Button>
                <Button onClick={handleSubmit}>Փնտրել</Button>
              </S.ActionsContainer>
            </S.FiltersListContainer>
          );
        }}
      </Formik>
    </Filter>
  );
};
