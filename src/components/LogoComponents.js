import React from 'react'
import styled, { keyframes } from 'styled-components'
import { ReactComponent as LogoType } from '../images/easy-peasy-lanches-logo-type.svg'
import { ReactComponent as LogoHamburger } from '../images/easy-peasy-lanches-logo-hamburger.svg'
import { ReactComponent as LogoPizza } from '../images/easy-peasy-lanches-logo-pizza.svg'
import { ReactComponent as LogoSymbol } from '../images/easy-peasy-lanches-logo-symbol.svg'

const fadeIn = keyframes`
  0% {
    fill-opacity: 0;
  }
  50% {
    fill-opacity: 0;
  }
  100% {
    fill-opacity: 1;
  }
`

const goUp = keyframes`
  0% {
    transform: translateY(80px);
  }
  50% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(0px);
  }
`

const goDown = keyframes`
  0% {
    transform: translateY(-80px);
  }
  50% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(0px);
  }
`

const StyledLargeLogoWrapper = styled.div`
  width: 300px;
  height: 450px;
  .type {
    animation: ${fadeIn} 5s infinite alternate;
  }
  .hamburger {
    animation: ${goUp} 5s infinite alternate;
  }
  .pizza {
    animation: ${goDown} 5s infinite alternate;
  }
`

export function LargeLogo() {
  return (
    <StyledLargeLogoWrapper>
      <LogoHamburger className='hamburger'/>
      <LogoType className='type'/>
      <LogoPizza className='pizza'/>
    </StyledLargeLogoWrapper>
  )
}

const StyledMediumLogoWrapper = styled.div`
  width: 100px;
  height: 100px;
`

export function MediumLogo() {
  return (
    <StyledMediumLogoWrapper>
      <LogoSymbol/>
    </StyledMediumLogoWrapper>
  )
}

const StyledSmallLogoWrapper = styled.div`
  width: 50px;
  height: 50px;
`

export function SmallLogo() {
  return (
    <StyledSmallLogoWrapper>
      <LogoSymbol/>
    </StyledSmallLogoWrapper>
  )
}