import React, { useEffect, useState } from 'react'
import { Formik } from 'formik'

import closeIcon from 'images/close.png'
import * as S from './RotationForm.styles'
import { Button, Select, Checkbox } from 'ui'
import { initialValues, validationSchema } from './RotationForm.config'
import { createArrayOfLength } from 'helpers/createArrayOfLength'
import { HttpService } from 'services'
import { Table } from 'components'
import { tableColumns } from 'constants/tableColumns'
import { educationStatuses } from 'constants/educationStatuses'
import createIcon from 'images/add.png'
import { toast } from 'react-toastify'
import { sortBy } from 'lodash'
import { getCourseSemesters } from 'helpers'

export const RotationForm = ({
    hideModal,
    formValues,
    loadStudents,
    loadProfessions,
    professionsList
}) => {
  const [rotationStudents, setRotationStudents] = useState(null)

  useEffect(() => {
    loadProfessions()
  }, [loadProfessions])

  const onSubmit = async (values) => {

    const data = await HttpService.get('rotation', values)
    // setRotationStudents(data)
    const nonEditableStudents = data.data.filter(student => [0, 1].includes(student.educationStatus))

    const editableStudents = data.data.filter(student => !((nonEditableStudents.map(el => el.id)).includes(student.id)))
    setRotationStudents({
      ...data,
      data: [
        ...sortBy(editableStudents, 'rates.total').reverse(),
        ...nonEditableStudents
      ]
    })
  }

  const makeRotation = async (studentIds, values) => {
    try {
      await HttpService.post('rotation', {
        studentIds,
        professionId: values.professionId,
        semesters: values.studentSemesters
      })

      loadStudents()

      toast.success('Ուսանողները ռոտացվեցին')
    } catch {
      toast.error('Առաջացավ խնդիր') 
    }
  }

  const selectedStudents = []
  // let selectedStudents = rotationStudents.data.map((el, ind) => el.educationStatus === 2 && ind + 1).concat(createArrayOfLength(rotationStudents.additional.freePlacesCount))
  if (!!rotationStudents) {
    for (const [ind, student] of rotationStudents?.data?.entries()) {
      if (student.educationStatus === 1)
        selectedStudents.push(true)
      else if (ind < rotationStudents.additional.freePlacesCount && [2, 3].includes(student.educationStatus))
        selectedStudents.push(true)
      else
        selectedStudents.push(false)
    }
  }

  return (
    <S.RotationFormContainer>
      <S.FormHeaderContainer>
        <S.HeaderTitle>
          Ռոտացիա
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
            const selectedProfession = professionsList.find(el => el.id === values.professionId)

            return (
              <S.FormContentContainer>
                <S.FormItemsList>
                  <Select
                    value={selectedProfession}
                    accessorKey='abbreviation'
                    options={professionsList}
                    placeholder='Մասնագիտություն'
                    onChange={(val) => {
                      setFieldValue('professionId', val?.value)
                    }}
                    error={touched.professionId && errors.professionId}
                  />
                  <Select
                    value={values.studentSemesters[1] ? values.studentSemesters[1]  / 2 : null}
                    options={createArrayOfLength(selectedProfession?.yearsCount)}
                    placeholder='Կուրս'
                    onChange={(val) => {
                      setFieldValue('studentSemesters', getCourseSemesters(val?.value))
                    }}
                    error={touched.studentSemesters && errors.studentSemesters}
                  />
                  {
                    selectedProfession &&
                      <S.SemestersList>
                        <S.SemestersTitle>
                          Կիսամյակներ
                        </S.SemestersTitle>
                        <S.SemesterItems>
                          {
                            createArrayOfLength(selectedProfession?.yearsCount * 2).map(el => {
                              return (
                                <S.SemesterItem key={el}>
                                  <div>{ el }</div>
                                  <Checkbox
                                    checked={values.semestersForCalculation.includes(el)}
                                    onChange={(checked) => {
                                      setFieldValue('semestersForCalculation', checked
                                        ? values.semestersForCalculation.concat(el)
                                        : values.semestersForCalculation.filter(item => item !== el)
                                      )
                                    }}
                                  />
                                </S.SemesterItem>
                              )
                            })
                          }
                        </S.SemesterItems>
                      </S.SemestersList>
                  }
                  {/* <Input
                    placeholder='Կիսամյակներ'
                    value={values.semesters}
                    onChange={(val) => setFieldValue('semesters', val)}
                    error={touched.semesters && errors.semesters}
                  /> */}
                </S.FormItemsList>
                {
                  rotationStudents &&
                    <Table
                      withoutDefaultActions={true}
                      customActions={(selectedRows) => [
                        {
                          key: 111,
                          icon: createIcon,
                          title: 'Կատարել ռոտացիա',
                          onClick: () => makeRotation(selectedRows.filter(row => ![0, 1].includes(row.original.educationStatus)).map(row => row.original.id), values)
                        }
                      ]}
                      title={`Անվճար տեղերի քանակ - ${rotationStudents.additional.freePlacesCount}`}
                      data={rotationStudents.data}
                      columns={tableColumns.rotationStudents(values.semestersForCalculation)}
                      selectedRowIndexes={selectedStudents}
                    />
                }
                <S.ButtonsContainer>
                  <Button className='bordered' onClick={hideModal}>
                    Չեղարկել
                  </Button>
                  <Button onClick={handleSubmit}>
                    Փնտրել
                  </Button>
                </S.ButtonsContainer>
              </S.FormContentContainer>
            )
          }
        }
      </Formik>
    </S.RotationFormContainer>
  )
}