import styled from 'styled-components'
import { CenteredFlex } from 'ui/styles'

export const InfoContainer = styled.div`
  display: flex;
  // align-items: center;
  background: #fff;
  border-radius: 15px;
  padding-bottom: 20px;
  width: calc(100% - 20px);
  flex-direction: column;
  gap: 10px;
  padding: 0px 10px;
`

export const InfoItemsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: calc(100% - 30px);
  padding: 0px 15px;
`

export const InfoItem = styled.div``