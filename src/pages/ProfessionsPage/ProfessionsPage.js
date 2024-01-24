import React from 'react'


import { Table } from 'components'
import { Layout } from 'components/Layout'
import { FiltersList } from './components/FiltersList'
import { tableColumns } from 'constants/tableColumns'
import * as S from './ProfessionsPage.styles'
import { ProfessionForm } from './components/ProfessionForm'
import { SubjectForm } from './components/SubjectForm'


export const ProfessionsPage = ({
  professions,
  deleteSubject,
  deleteProfession,
  loadProfessions,
  loadProfessionSubjects
}) => {

  return (
    <Layout>
      <S.ProfessionsPageContainer>
        <Table
          title='Մասնագիտություններ'
          data={professions.list}
          loadData={loadProfessions}
          total={professions.total}
          onDelete={deleteProfession}
          FormComponent={ProfessionForm}
          FilterComponent={FiltersList}
          SubComponent={({ row }) => {
            const subjects = professions.list.find(el => el.id === row.original.id)?.subjects || []

            return (
              <Table
                title='Առարկաներ'
                total={subjects.total}
                data={subjects.list}
                loadData={(search) => loadProfessionSubjects({
                  ...search,
                  professionId: row.original.id
                })}
                onDelete={(ids) => deleteSubject(ids, row.original.id)}
                FormComponent={(props) => <SubjectForm {...props} professionId={row.original.id} />}
                columns={tableColumns.subjects(row.original.yearsCount)}
                isSubTable={true}
                withoutCheckboxes={true}
              />
            )
          }}
          columns={tableColumns.profession}
        />
      </S.ProfessionsPageContainer>
    </Layout>
  )
}
