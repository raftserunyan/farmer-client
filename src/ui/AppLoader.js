import React from 'react'
import styled, { keyframes } from 'styled-components'


export const AppLoader = () => {
  return (
    <LoaderWrapper>
      <LoaderContainer>
        <Circle />
        <Circle />
        <Circle />
      </LoaderContainer>
    </LoaderWrapper>
  )
}

export const LoaderWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(18, 19, 29, 0.05);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`

const LoaderContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const CircleAnimation = keyframes`
  0%, 80%, 100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  40% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  0%, 80%, 100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  40%{
    -webkit-transform: scale(1);
    transform: scale(1);
  }
`

const Circle = styled.div`
  width: 10px;
  height: 20px;
  border-radius: 62px;
  background-color: ${({ theme }) => theme.colors.green};
  position: relative;
  -webkit-animation: 1.2s ${CircleAnimation} ease-in-out infinite;
  animation: 1.2s ${CircleAnimation} ease-in-out infinite ;
  &:nth-child(2) {
    margin: 0 15px;
    -webkit-animation: 1.2s ${CircleAnimation} ease-in-out infinite .15555s;
    animation: 1.2s ${CircleAnimation} ease-in-out infinite .15555s;   
  }
  &:nth-child(3) {
    -webkit-animation: 1.2s ${CircleAnimation} ease-in-out infinite .300000s;
    animation: 1.2s ${CircleAnimation} ease-in-out infinite .300000s;
  }
`