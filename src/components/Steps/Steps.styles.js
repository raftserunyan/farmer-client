import styled from 'styled-components'
import { CenteredFlex } from 'ui/styles'

export const StepsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 40px);
  align-items: center;
  padding: 10px 30px 10px 10px;
`

export const StepsWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`

export const StepsListContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`

export const StepContent = styled.div`
  display: flex;
  width: 100%;
  min-height: 280px;
`

export const StepLine = styled.div`
  display: flex;
  width: 100%;
  height: 2px;
  background: ${({ theme }) => theme.colors.gray};
`

export const StepCircle = styled.div`
  min-width: 8px;
  min-height: 8px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.gray};
`

export const Step = styled(CenteredFlex)`
  min-width: 40px;
  min-height: 40px;
  border-radius: 50%;
  border: 2px solid;
  cursor: pointer;
  border-color: ${({ theme }) => theme.colors.gray};
`

export const StepItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;

  &.current {
    ${Step} {
      color: #fff;
      background: ${({ theme }) => theme.colors.green};
      border-color: ${({ theme }) => theme.colors.green};
    }

    ${StepCircle} {
      background: ${({ theme }) => theme.colors.green};
    }

    ${StepLine} {
      background: ${({ theme }) => theme.colors.green};
    }
  }

  &.checked {
    ${Step} {
      border-color: ${({ theme }) => theme.colors.green};
    }

    ${StepLine} {
      background-color: ${({ theme }) => theme.colors.green};
    }

    ${StepCircle} {
      background-color: ${({ theme }) => theme.colors.green};
    }
  }

  // &:first-child {
  //   ${StepLine} {
  //     &:first-child {
  //       display: none;
  //     }
  //   }
  // }

  &:last-child {
    ${StepLine} {
      &:last-child {
        display: none;
      }
    }

    ${StepCircle} {
      display: none;
    }
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 20px;
  justify-content: flex-end;
  gap: 15px;

  .Button {
    width: 150px;
  }
`