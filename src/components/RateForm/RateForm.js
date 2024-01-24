import React, { useMemo, useEffect, useState } from 'react'
import { Formik } from 'formik'

import * as S from './RateForm.styles'
import closeIcon from 'images/close.png'
import { Input, Button, Select, Checkbox } from 'ui'
import { initialValues } from './RateForm.config'
import { FormLabelItem } from 'components/FormLabelItem'
import { createArrayOfLength } from 'helpers/createArrayOfLength'
import { HttpService } from 'services'
import { toast } from 'react-toastify'

export const RateForm = ({
  student,
  hideModal,
  rateStudent,
  loadProfessionSubjects
}) => {
  const [rates, setRates] = useState(null)
  const [subjects, setSubjects] = useState([])
  const [curriculum, setCurriculum] = useState([])

  const loadRates = async () => {
    try {
      const rates = await HttpService.get('rating', { studentId: student.id })
      setRates({
        rates: rates?.data
      })
    } catch (ex) {
      toast.error(`Առաջացավ խնդիր: ${ex.message}`)
    }
  }

  useEffect(() => {
    loadRates()
  }, [])

  const loadCurriculum = async () => {
    try {
      const { curriculum } = await HttpService.get(`group/${student.group.id}`)

      setCurriculum(curriculum)
    } catch (ex) {
      toast.error(`Առաջացավ խնդիր: ${ex.message}`)
    }
  }

  const loadSubjectsOfProfession = async () => {
  const subjects = await loadProfessionSubjects({ professionId: student.group.professionId, limit: 0 })
    setSubjects(subjects)
  }

  useEffect(() => {
    loadCurriculum()
    loadSubjectsOfProfession()
  }, [])

  const onSubmit = (values) => {
    rateStudent(values.rates)
    hideModal()
  }

  return (
    <S.RateFormContainer>
      <S.FormHeaderContainer>
        <S.HeaderTitle>
          Գնահատել ուսանողին - { student.firstname + ' ' + student.lastname }
        </S.HeaderTitle>
        <S.CloseFormContainer onClick={hideModal}>
          <S.CloseFormIcon src={closeIcon}/>
        </S.CloseFormContainer>
      </S.FormHeaderContainer>
      <Formik
        onSubmit={onSubmit}
        initialValues={rates || initialValues}
        enableReinitialize={true}
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
                <S.FormRow>
                  <FormLabelItem label='Գնահատականներ'>
                    <S.CurriculumContainer>
                      <S.CurriculumContainerHeader>
                      {
                        (createArrayOfLength(student.group.profession?.yearsCount)).map((year) => {
                          return (
                            <S.YearContainer>
                              <S.Course>
                                { year } Կուրս
                              </S.Course>
                              <S.SemestersHeaderWrapper>
                                <S.SemestersHeaderContainer>
                                  <div> I Կիս.</div>
                                  <div> II Կիս.</div>
                                </S.SemestersHeaderContainer>
                              </S.SemestersHeaderWrapper>
                            </S.YearContainer>
                          )
                        })
                      }
                      </S.CurriculumContainerHeader>
                      <S.ProfessionSubjectsSelection>
                        {
                          
                          subjects.map((subject, position) => {
                            return (
                              <S.ProfessionSubjectItem>
                                <S.SubjectName title={subject.name}>
                                  { position + 1 }) { subject.name }
                                </S.SubjectName>
                                <S.CheckboxesContainer>
                                  {
                                    createArrayOfLength(student.group.profession?.yearsCount * 2).map(semester => {
                                      return (
                                        <S.InputWrapper>
                                          <Input
                                            value={values.rates.find(rate => rate.semester === semester && rate.subjectId === subject.id)?.rate}
                                            maxLength={2}
                                            onChange={(rate) => {
                                              const rateIndex = values.rates.findIndex(rate => rate.subjectId === subject.id && rate.semester === semester)

                                              if (rateIndex === -1)
                                                setFieldValue('rates', values.rates.concat({
                                                  subjectId: subject.id,
                                                  rate: +rate,
                                                  semester,
                                                  studentId: student.id
                                                }))
                                              else
                                                setFieldValue('rates', [
                                                  ...values.rates.slice(0, rateIndex),
                                                  {
                                                    ...values.rates[rateIndex],
                                                    rate: +rate
                                                  },
                                                  ...values.rates.slice(rateIndex + 1)
                                                ])
                                            }}
                                            disabled={!(curriculum.find(curr => curr.subjectId === subject.id)?.semesters?.includes(semester))}
                                          />
                                        </S.InputWrapper>
                                      )
                                    })
                                  }
                                </S.CheckboxesContainer>
                              </S.ProfessionSubjectItem>
                            )
                          })
                        }
                      </S.ProfessionSubjectsSelection>
                    </S.CurriculumContainer>
                  </FormLabelItem>
                </S.FormRow>
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
    </S.RateFormContainer>
  )
}
