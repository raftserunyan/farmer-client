import React, { useState } from 'react'
import styled from 'styled-components'
import OutsideClickHandler from 'react-outside-click-handler'
import cx from 'classnames'

export const Dropdown = ({ children, className }) => {
  const [Header, Content ] = children
  const [isOpen, setIsOpen] = useState(false)

  return (
    <OutsideClickHandler
      onOutsideClick={() => setIsOpen(false)}
    >
      <DropdownContainer className='Dropdown-Container'>
        <HeaderContainer onClick={() => setIsOpen(true)}>
          { Header }
        </HeaderContainer>
        {
            <ContentContainer className={cx({ isOpen, [className]: true }, 'Dropdown-Content')}>
              { isOpen && Content }
            </ContentContainer>
        }
      </DropdownContainer>
    </OutsideClickHandler>
  )
}

const DropdownContainer = styled.div`
  display: flex;
  position: relative;
`

const ContentContainer = styled.div`
  display: flex;
  opacity: 0;
  top: 75px;
  background: #fff;
  border-radius: 7px;
  position: absolute;
  transition: all 0.3s ease;
  box-shadow: 0 5px 25px rgb(34 41 47 / 10%);
  z-index: 10;

  &.isOpen {
    opacity: 1;
  }
`

const HeaderContainer = styled.div`
  display: flex;
`