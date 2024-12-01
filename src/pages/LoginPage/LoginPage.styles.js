import styled from 'styled-components'


import { CenteredFlex } from 'ui/styles'

export const LoginPageContainer = styled(CenteredFlex)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

export const PageTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.black};
  margin: 32px 0px;
`

export const LoginForm = styled.div`
  gap: 25px;
  width: calc(100% - 40px);
  display: flex;
  flex-direction: column;

  @media (min-width: 440px) {
    width: 400px;
  }
`

export const Logo = styled.img`
  width: 150px;
  height: 150px;
`