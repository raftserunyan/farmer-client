import styled from 'styled-components'
import { CenteredFlex } from 'ui/styles'

export const RateFormContainer = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 15px;
  padding-bottom: 20px;
  width: calc(100% - 20px);
  flex-direction: column;
  gap: 10px;
  padding: 0px 10px;
`

export const FormContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 30px);
  padding: 10px 15px;
  align-items: center;
  gap: 10px;
`

export const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 10px;
  justify-content: flex-end;
  gap: 15px;

  .Button {
    width: 150px;
  }
`

export const FormRow = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;

  .SelectContainer {
    flex: 1;
  }
`

export const YearsList = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 10px;
  padding-right: 8px;
  max-height: 400px;
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

export const GroupItem = styled.div`
  display: flex;
  width: 100%;
  cursor: pointer;
  height: 30px;
  border-radius: 10px;
  background: red
`

export const YearContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // width: 100%;
  width: 130px;
  gap: 10px;
  padding: 0px 10px;
`

export const SemestersHeaderWrapper = styled.div`
  // width: 100%;
  display: flex;
  justify-content: center;
`

export const SemestersHeaderContainer = styled.div`
  display: flex;
  // width: 250px;
  gap: 40px;
  margin-bottom: 10px;
  justify-content: center;

  div {
    // width: 100px;
    text-align: center;
  }
`

export const SemesterContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #fff;
  padding-bottom: 15px;
  justify-content: space-between;

  &:last-child {
    padding-bottom: 0px;
    border-bottom: none;
  }

  > div {
    width: 300px;
    display: flex;

    justify-content: space-around;
  }
`

export const SemesterCheckboxesContainer = styled.div`
  display: flex;
  width: 250px !important;
  gap: 40px;
  justify-content: space-between;
`

export const CurriculumContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 20px 30px; 
`

export const CurriculumContainerHeader = styled.div`
  display: flex;
  border-bottom: 2px solid #e8e8e8;
  padding-bottom: 10px;
  padding-left: 150px;
  padding-right: 30px;
  gap: 40px;
  justify-content: flex-end;
`

export const Course = styled.div`
  font-weight: 500;
`

export const ProfessionSubjectsSelection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 20px;
  overflow-y: auto;
  max-height: 300px;

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

export const ProfessionSubjectItem = styled.div`
  display: flex;
`

export const SubjectName = styled.div`
  white-space: pre;
  width: 300px;
  text-overflow: ellipsis;
  overflow: hidden;
`

export const CheckboxesContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 0px 30px;
  // padding-left: 30px;
  // padding-right: 30px;
  gap: 20px;
  justify-content: flex-end;
`

export const InputWrapper = styled.div`
  width: 75px;
  display: flex;
  justify-content: center;

  .InputContainer {
    min-width: 44.8px !important;
    max-width: 44.8px !important;

    input {
      text-align: center;
      padding: 12px 10px;
      width: calc(100% - 24px);
    }
  }
  
  &:nth-child(2n + 1) {
    .InputContainer {
      margin-left: 45px;
    }
  }

  &:nth-child(2n + 2) {
    .InputContainer {
      margin-left: 25px;
    } 
  }
`
