import React from 'react'
import styled from 'styled-components'
import cx from 'classnames'

import { CenteredFlex } from './styles'

export const Button = ({
  disable,
  children,
  className,
  ...rest
}) => {
  return (
    <ButtonContainer
      {...rest}
      className={cx({ [className]: true, disable }, 'Button')}
    >
      { children }
    </ButtonContainer>
  )
}

Button.defaultProps = {
  disable: false,
  className: 'main'
}

export const ButtonContainer = styled(CenteredFlex)`
  cursor: pointer;
  border-radius: 6px;
  width: calc(100% - 28px);
  transition: all 0.3s ease;
  padding: 12px;
  user-select: none;

  &.main {
    color: #fff;
    border: 2px solid transparent;
    background: ${({ theme }) => theme.colors.green};

    &:hover {
      background: ${({ theme }) => theme.colors.lightGreen};
    }
  }

  &.bordered {
    width: calc(100% - 28px);
    border: 2px solid #d9d9d9;

    &:hover {
      border-color: ${({ theme }) => theme.colors.lightGreen};
    }
  }

  &.danger {
    border: 2px solid #f18c92;

    &:hover {
      border-color: #e01b28;
    }
  }

  &.disable {
    opacity: 0.45;
    pointer-events: none;
  }
`