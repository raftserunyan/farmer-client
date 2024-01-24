import React from 'react'
import { useDispatch } from 'react-redux'

import * as S from './Filter.styles'
import closeIcon from 'images/close.png'
import { hideModal } from 'redux/actions/modal'

export const Filter = ({
  children
}) => {
  const dispatch = useDispatch()

  return (
    <S.FilterContainer className='Filter'>
      <S.FilterHeader>
        <S.HeaderTitle>
          Ֆիլտրներ
        </S.HeaderTitle>
        <S.CloseFormContainer onClick={() => dispatch(hideModal())}>
          <S.CloseFormIcon src={closeIcon}/>
        </S.CloseFormContainer>
      </S.FilterHeader>
      <S.Divider />
      <S.FilterContent>
        { children }
      </S.FilterContent>
    </S.FilterContainer>
  )
}