import React, { useMemo, useEffect, useState } from 'react'

import * as S from './RatingList.styles'
import closeIcon from 'images/close.png'
import { Input, Button } from 'ui'
import { createArrayOfLength } from 'helpers/createArrayOfLength'
import { HttpService } from 'services'
import { toast } from 'react-toastify'

export const RatingList = ({
  student,
  loadProfessionSubjects
}) => {
  const [rates, setRates] = useState([])
  const [subjects, setSubjects] = useState([])

  const loadRates = async () => {
    try {
      const rates = await HttpService.get('rating', { studentId: student.id })
      setRates(rates?.data)
    } catch (ex) {
      toast.error(`Առաջացավ խնդիր: ${ex.message}`)
    }
  }

  useEffect(() => {
    loadRates()
  }, [])

  const loadSubjectsOfProfession = async () => {
    const subjects = await loadProfessionSubjects({ professionId: student.group.professionId })
    setSubjects(subjects)
  }
  

  useEffect(() => {
    loadSubjectsOfProfession()
  }, [])

  return (
    <S.RateFormContainer>
      <S.CurriculumContainer>
        <S.CurriculumContainerHeader>
          {
            (createArrayOfLength(4)).map((year) => {
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
                        createArrayOfLength(4 * 2).map(semester => {
                          return (
                            <S.InputWrapper>
                              <Input
                                value={rates.find(rate => rate.semester === semester && rate.subjectId === subject.id)?.rate}
                                disabled={true}
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
    </S.RateFormContainer>
  )
}
