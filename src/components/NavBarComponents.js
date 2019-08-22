import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { SmallLogo } from './LogoComponents'

const StyledSideNavBar = styled.nav`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 300px;
  height: auto;
  min-height: 100vh;
  background-color: #fad390;
  z-index: 999;
`

export function SideNavBar(props) {
  return (
    <StyledSideNavBar>
      <ul>
        {props.children}
      </ul>
    </StyledSideNavBar>
  )
}

const StyledSideNavBarLogo = styled.li`
  a {
    width: 100%;
    height: 80px;
    display: grid;
    justify-content: center;
    align-content: center;
    border-radius: 40px;
    background-color: #fad390;
    &:hover {
      background-color: #e7c17f;
    }
    img {
      width: 120px;
      height: auto;
    }
  }
`

export function SideNavBarLogo() {
  return (
    <StyledSideNavBarLogo>
      <NavLink to='/home'>
        <SmallLogo/>
      </NavLink>
    </StyledSideNavBarLogo>
  )
}

const StyledSideNavBarBtn = styled.li`
  a {
    width: 100%;
    height: 80px;
    display: grid;
    grid-template-columns: 80px 220px;
    border-radius: 40px;
    text-decoration: none;
    background-color: #fad390;
    &:hover {
      background-color: #e7c17f;
    }
    img {
      width: 40px;
      height: auto;
      justify-self: center;
      align-self: center;
    }
    p {
      justify-self: start;
      align-self: center;
      font-family: "Blinker";
      font-size: 25px;
      color: #e84118;
    }
  }
`

export function SideNavBarBtn(props) {
  return (
    <StyledSideNavBarBtn>
      <NavLink to={props.to}>
        <img
          src={props.icon}
          alt='Ícone do Barra de Navegação'
        />
        <p>{props.title}</p>
      </NavLink>
    </StyledSideNavBarBtn>
  )
}

const StyledSideNavBarLogOutBtn = styled.li`
  width: 100%;
  height: 80px;
  display: grid;
  grid-template-columns: 80px 220px;
  border-radius: 40px;
  text-decoration: none;
  background-color: #fad390;
  cursor: pointer;
  &:hover {
    background-color: #e7c17f;
  }
  img {
    width: 40px;
    height: auto;
    justify-self: center;
    align-self: center;
  }
  p {
    justify-self: start;
    align-self: center;
    font-family: "Blinker";
    font-size: 25px;
    color: #e84118;
  }
`

export function SideNavBarLogOutBtn(props) {
  return (
    <StyledSideNavBarLogOutBtn onClick={props.onClick}>
      <img
        src={props.icon}
        alt='Ícone do Barra de Navegação'
      />
      <p>{props.title}</p>
    </StyledSideNavBarLogOutBtn>
  )
}

const StyledAuthLink = styled.div`
  margin: 10px 0px;
  justify-self: center;
  a {
    text-decoration: none;
    font-family: 'Blinker';
    font-size: 20px;
    color: #f5f6fa;
  }
  &:hover > a {
    text-decoration: underline;
  }
`

export function AuthLink(props) {
  return (
    <StyledAuthLink>
      <Link to={props.to}>{props.title}</Link>
    </StyledAuthLink>
  )
}

export function PublicSideNavBar(props) {
  return (
    <SideNavBar>
      <SideNavBarLogo/>
      {
        props.data.map(
          (cur, idx) => {
            return (
              <SideNavBarBtn
                key={idx}
                to={cur.to}
                icon={cur.icon}
                title={cur.title}
              />
            )
          }
        )
      }
    </SideNavBar>
  )
}