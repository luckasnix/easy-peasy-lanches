import React from 'react'
import styled, { keyframes } from 'styled-components'
import pizzaLoaderIcon from '../images/pizza-loader.svg'

const spin = keyframes`
  from {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(360deg)
  }
`

const StyledPizzaLoader = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  justify-content: center;
  align-content: center;
  background-color: #1e272e;
  img {
    width: 150px;
    height: auto;
    animation: ${spin} 2500ms linear infinite;
  }
`

export function PizzaLoader() {
  return (
    <StyledPizzaLoader>
      <img src={pizzaLoaderIcon} alt='Ícone de carregamento'/>
    </StyledPizzaLoader>
  )
}