import React from 'react'

import profileIcon from 'images/profile.png'
import * as S from './StudentProfileLink.styles'
import { useHistory } from 'react-router-dom'

export const StudentProfileLink = ({ student }) => {
  const history = useHistory()

  if (!student) return null

  const goToProfile = () => {
    history.push(`/student/${student.id}`)
  }

  return (
    <S.ProfileLinkWrapper onClick={goToProfile}>
      <S.ProfileLinkContainer>
        <S.ProfileLink src={profileIcon} />
      </S.ProfileLinkContainer>
    </S.ProfileLinkWrapper>
  )
}