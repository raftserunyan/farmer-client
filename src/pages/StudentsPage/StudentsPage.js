import React from 'react';

import rateIcon from 'images/rating.png';
import { fields } from 'constants/fields';
import { Layout } from 'components/Layout';
import * as S from './StudentsPage.styles';
import attachIcon from 'images/attach.png';
import { RateForm } from 'components/RateForm';
import rotationIcon from 'images/rotation.png';
import downloadIcon from 'images/download.png';
import { tableColumns } from 'constants/tableColumns';
import { StudentForm } from './components/StudentForm';
import { FiltersList } from './components/FiltersList';
import { ExportableFields, Table } from 'components';
import { RotationForm } from './components/RotationForm';
import { AssignCommandForm } from './components/AssignCommandForm';

export const StudentsPage = ({
  students,
  showModal,
  loadStudents,
  deleteStudent
}) => {
  console.log(students, 'sss');
  return (
    <Layout>
      <S.StudentsPageContainer>
        <Table
          title="Ուսանողներ"
          data={students.list}
          total={students.total}
          onDelete={deleteStudent}
          FormComponent={StudentForm}
          columns={tableColumns.students}
          loadData={loadStudents}
          FilterComponent={FiltersList}
          isStudentsPage={true}
          customActions={(selectedRows) => [
            {
              icon: downloadIcon,
              title: 'Ներբեռնել',
              onClick: () =>
                showModal(ExportableFields, {
                  fields: fields.student
                })
            },
            {
              icon: rateIcon,
              title: 'Գնահատել',
              disabled: selectedRows.length !== 1,
              onClick: () =>
                showModal(RateForm, { student: selectedRows[0].original })
            },
            {
              icon: attachIcon,
              title: 'Կցագրել հրաման',
              disabled: selectedRows.length === 0,
              onClick: () =>
                showModal(AssignCommandForm, {
                  studentIds: selectedRows.map((row) => row.original.id)
                })
            },
            {
              icon: rotationIcon,
              title: 'Ռոտացիա',
              onClick: () => showModal(RotationForm)
            }
          ]}
        />
      </S.StudentsPageContainer>
    </Layout>
  );
};
