import styled from 'styled-components'
import { CenteredFlex } from 'ui/styles'

export const TabMenu = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 2px;
  height: 100%;
`

export const TabHeader = styled.div`
  display: flex;
  width: 100%;
  background: #fff;
  border-top-left-radius: 7px;
  // background: ${({ theme }) => theme.colors.lightGreen};
  border-top-right-radius: 7px;
`

export const TabItem = styled(CenteredFlex)`
  flex: 1;
  padding: 20px;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  // color: #fff;
  &.active {
    // background: ${({ theme }) => theme.colors.lightGreen};
    // color: #fff;
    border-bottom: 2px solid ${({ theme }) => theme.colors.lightGreen};
  }
`

export const TabContent = styled.div`
  display: flex;
  width: 100%;
  height: 100%; 
`