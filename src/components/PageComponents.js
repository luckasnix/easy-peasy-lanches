import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import pizzaLogo from '../images/pizza-logo.svg'

const StyledPage = styled.div`
  width: 100vw;
  height: auto;
  min-height: 100vh;
  display: grid;
  justify-content: center;
  align-content: center;
  background-color: #1e272e;
`

export function Page(props) {
  return (
    <StyledPage>
      {props.children}
    </StyledPage>
  )
}

const StyledMain = styled.div`
  width: 100vw;
  height: auto;
  min-height: 100vh;
  padding: 100px 0px 100px 300px;
  display: grid;
  justify-content: center;
  align-content: center;
  grid-gap: 20px;
  background-color: #1e272e;
`

export function Main(props) {
  return (
    <StyledMain>
      {props.children}
    </StyledMain>
  )
}

const StyledHeader = styled.header`
  width: 100vw;
  height: auto;
  padding: 20px 0px;
  position: fixed;
  top: 0px;
  left: 0px;
  display: grid;
  justify-content: center;
  img {
    width: 200px;
    height: auto;
  }
`

export function Header() {
  return (
    <StyledHeader>
      <NavLink to='/'>
        <img src={pizzaLogo} alt='Logomarca da empresa'/>
      </NavLink>
    </StyledHeader>
  )
}