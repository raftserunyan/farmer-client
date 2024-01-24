import styled from 'styled-components'

import { CenteredFlex } from "ui/styles"

export const ProfileLinkWrapper = styled(CenteredFlex)`
`

export const ProfileLinkContainer = styled(CenteredFlex)`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.green};
  transition: background 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.lightGreen};
  }
`

export const ProfileLink = styled.img`
  width: 20px;
  height: 20px;
`