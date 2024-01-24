import styled from 'styled-components'

export const ModalContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s ease;
  opacity: 0;
  pointer-events: none;

  > div {
    transition: opacity 0.3s ease;
    opacity: 0;
  }

  &.opened {
    pointer-events: all;
    background: rgba(0,0,0,0.4);
    z-index: 100000;
    opacity: 1;

    > div {
      opacity: 1;
    }
  }

  
`