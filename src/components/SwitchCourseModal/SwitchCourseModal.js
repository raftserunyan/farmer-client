import React, { useMemo } from 'react'

import * as S from './SwitchCourseModal.styles'
import closeIcon from 'images/close.png'
import { Input, Button, Select } from 'ui'
import { Formik } from 'formik'
import { initialValues, validationSchema } from './SwitchCourseModal.config'

export const SwitchCourseModal = ({
  loadGroups,
  groups
}) => {

  return null

  const onSubmit = (values) => {
    
    // hideModal()
  }
 
  // return (
  //   <S.SwitchCourseModalContainer>
  //     <S.FormHeaderContainer>
  //       <S.HeaderTitle>
  //         Կատարել Փոխադրում
  //       </S.HeaderTitle>
  //       <S.CloseFormContainer onClick={hideModal}>
  //         <S.CloseFormIcon src={closeIcon}/>
  //       </S.CloseFormContainer>
  //     </S.FormHeaderContainer>
  //     <Formik
  //       onSubmit={onSubmit}
  //       validationSchema={validationSchema}
  //       initialValues={[]}
  //     >
  //       {
  //         ({
  //           values,
  //           errors,
  //           touched,
  //           handleSubmit,
  //           setFieldValue
  //         }) => {
  //           console.log(values)
  //           return (
  //             <S.FormContentContainer>
  //               <Select
  //                 placeholder='Խմբեր'
  //                 options={groups.list}
  //                 onChange={val => console.log(val)}
  //                 error={touched.groups && errors.groups}
  //               />
  //               <S.ButtonsContainer>
  //                 <Button className='bordered' onClick={hideModal}>
  //                   Չեղարկել
  //                 </Button>
  //                 <Button onClick={handleSubmit}>
  //                   Հաստատել
  //                 </Button>
  //               </S.ButtonsContainer>
  //             </S.FormContentContainer>
  //           )
  //         }
  //       }
  //     </Formik>
  //   </S.SwitchCourseModalContainer>
  // )
}