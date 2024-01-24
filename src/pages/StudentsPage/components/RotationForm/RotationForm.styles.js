import styled from 'styled-components'
import { CenteredFlex } from 'ui/styles'

export const SemestersList = styled.div`
  margin-bottom: 10px;
`

export const SemestersTitle = styled.div`
  font-size: 14px;
  padding-bottom: 10px;
  border-bottom: 2px solid #f6f6f8;
`

export const RotationFormContainer = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 15px;
  // margin-top: -20px;
  padding-bottom: 20px;
  min-width: 400px;
  flex-direction: column;
  gap: 10px;
  max-height: 600px;
  min-height: 300px;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 7px;
  }
  
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px #eeeeee; 
    border-radius: 10px;
  }
   
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.green};
    border-radius: 10px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.lightGreen};
  }
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
  min-width: 500px;
  // min-height: 233px;
`

export const FormItemsList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`

export const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  gap: 15px;
  margin-top: auto;

  .Button {
    width: 150px;
  }
`

export const FormItem = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
`

export const ChangeableColumnsButton = styled(CenteredFlex)`
  min-width: 44px;
  min-height: 44px;
  border-radius: 20%;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    background: #f6f6f8;
  }
`

export const SemesterItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  .Checkbox {
    width: 25px;
    height: 25px;
  }
`

export const SemesterItems = styled.div`
  display: flex;
  gap: 20px;
  padding: 0px 10px;
  margin-top: 10px;
  flex-wrap: wrap;
  max-width: 380px;
`