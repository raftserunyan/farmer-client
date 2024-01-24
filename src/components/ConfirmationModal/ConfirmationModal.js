import React from 'react'

import { Button } from 'ui'
import closeIcon from 'images/close.png'
import * as S from './ConfirmationModal.styles'

export const ConfirmationModal = ({
  onYes,
  onNo,
  hideModal
}) => {
  const onClose = () => {
    hideModal()
    onNo?.()
  }

  return (
    <S.ConfirmationModalContainer>
      <S.FormHeaderContainer>
        <S.HeaderTitle>
          Հաստատում
        </S.HeaderTitle>
        <S.CloseFormContainer onClick={onClose}>
          <S.CloseFormIcon src={closeIcon}/>
        </S.CloseFormContainer>
      </S.FormHeaderContainer>
      <S.FormContentContainer>
        <S.Question>
          Հաստատե՞լ գործողությունը
        </S.Question>
        <S.ActionsContainer>
          <Button className='bordered' onClick={() => {
            hideModal()
            onNo?.()
          }}>
            Չեղարկել
          </Button>
          <Button onClick={() => {
            hideModal()
            onYes?.()
          }}>
            Հաստատել
          </Button>
        </S.ActionsContainer>
      </S.FormContentContainer>
    </S.ConfirmationModalContainer>
  )
}