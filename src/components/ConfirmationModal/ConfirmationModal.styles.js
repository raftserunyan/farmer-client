import styled from 'styled-components'
import { CenteredFlex } from 'ui/styles'

export const ConfirmationModalContainer = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 15px;
  margin-top: -20px;
  padding-bottom: 20px;
  min-width: 400px;
  flex-direction: column;
  gap: 10px;
`

export const FormHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 15px;
  width: calc(100% - 30px);
  justify-content: space-between;
  border-bottom: 2px solid #f6f6f8;
`

export const HeaderTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
`

export const CloseFormContainer = styled(CenteredFlex)`
  width: 45px;
  height: 45px;
  border-radius: 20%;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #f6f6f8;
  }
`

export const CloseFormIcon = styled.img`
  width: 15px;
  heigth: 15px;
  object-fit: cover;
`

export const FormContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 30px);
  padding: 0px 15px;
  align-items: center;
  gap: 10px;
`

export const Question = styled.div`
  font-size: 22px;
  padding: 10px 0px;
`

export const ActionsContainer = styled.div`
  display: flex;
  margin-top: 10px;
  gap: 10px;
  margin-left: auto;

  .Button {
    width: 100px !important;
  }
`