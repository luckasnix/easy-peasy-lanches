import React, { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { v4 } from 'uuid'
import { toCapitalize, formatPrice } from '../libraries/Formatter'
import * as Actions from '../store/actions/orderActions'

const StyledList = styled.ul`
  display: grid;
  grid-gap: 20px;
  list-style: none;
`

export function List(props) {
  return (
    <StyledList>
      {props.children}
    </StyledList>
  )
}

const StyledListItem = styled.li`
  width: 650px;
  height: 160px;
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  padding: 20px;
  border-radius: 5px;
  background-color: #fad390;
`

const StyledProduct = styled.div`
  display: grid;
  grid-gap: 5px;
  align-self: center;
  img {
    width: 120px;
    height: 80px;
    border-radius: 5px;
  }
  p {
    font-family: 'Blinker';
    font-size: 20px;
    text-align: center;
    color: #e84118;
  }
`

const StyledSelect = styled.div`
  display: grid;
  align-self: center;
  select {
    width: 120px;
    height: 40px;
    padding: 0px 10px;
    font-family: 'Blinker';
    font-size: 20px;
    color: #e84118;
    border: 2px solid #e84118;
    border-radius: 20px;
    background-color: #f5f6fa;
  }
`

const StyledCounter = styled.div`
  align-self: center;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 5px;
  p {
    width: 40px;
    height: 40px;
    display: grid;
    justify-content: center;
    align-content: center;
    font-family: 'Blinker';
    font-size: 20px;
    color: #e84118;
    border: 2px solid #e84118;
    border-radius: 20px;
    background-color: #f5f6fa;
  }
  button {
    width: 40px;
    height: 40px;
    font-family: 'Blinker';
    font-size: 20px;
    color: #f5f6fa;
    border: none;
    border-radius: 20px;
    background-color: #e84118;
    cursor: pointer;
  }
`

const StyledConfirm = styled.div`
  display: grid;
  grid-gap: 5px;
  align-self: center;
  div {
    width: 120px;
    height: 40px;
    display: grid;
    justify-content: center;
    align-content: center;
    font-family: 'Blinker';
    font-size: 20px;
    color: #e84118;
    border: 2px solid #e84118;
    border-radius: 20px;
    background-color: #f5f6fa;
  }
  button {
    width: 120px;
    height: 40px;
    font-family: 'Blinker';
    font-size: 20px;
    color: #f5f6fa;
    border: none;
    border-radius: 20px;
    background-color: #e84118;
    cursor: pointer;
  }
`

export function ListItem(props) {
  const [curIdx, setCurIdx] = useState(0)
  const [selectedOption, setSelectedOption] = useState(props.sizes[curIdx])
  const getIdx = useCallback(
    (curOption) => {
      let curOptionIdx = null
      props.sizes.forEach(
        (cur,idx) => {
          if (cur === curOption) {
            curOptionIdx = idx
          }
        }
      )
      return curOptionIdx
    },
    [props.sizes]
  )
  const handleSelect = useCallback(
    (evt) => {
      setSelectedOption(evt.target.value)
      setCurIdx(getIdx(evt.target.value))
    },
    [getIdx]
  )
  const [counter, setCounter] = useState(1)
  const decrementCounter = useCallback(
    () => {
      if (counter === 1) {
        return
      }
      setCounter(counter - 1)
    },
    [counter]
  )
  const incrementCounter = useCallback(
    () => {
      setCounter(counter + 1)
    },
    [counter]
  )
  const dispatch = useDispatch()
  const addOrder = useCallback(
    (order) => {
      dispatch(Actions.addOrder(order))
    },
    [dispatch]
  )
  const price = props.prices[curIdx] * counter
  const addItem = useCallback(
    () => {
      const order = {
        id: v4(),
        food: props.food,
        flavor: props.flavor,
        size: selectedOption,
        amount: counter,
        price: price
      }
      addOrder(order)
    },
    [addOrder, props.food, props.flavor, selectedOption, counter, price]
  )
  return (
    <StyledListItem>
      <StyledProduct>
        <img src={props.img} alt='Imagem do item'/>
        <p>{toCapitalize(props.flavor)}</p>
      </StyledProduct>
      <StyledSelect>
        <select value={selectedOption} onChange={handleSelect}>
          {
            props.sizes.map(
              (cur,idx) => {
                return <option key={idx} value={cur}>{toCapitalize(cur)}</option>
              }
            )
          }
        </select>
      </StyledSelect>
      <StyledCounter>
        <button onClick={decrementCounter}>-</button>
        <p>{counter}</p>
        <button onClick={incrementCounter}>+</button>
      </StyledCounter>
      <StyledConfirm>
        <div>{formatPrice(price)}</div>
        <button onClick={addItem}>Adicionar</button>
      </StyledConfirm>
    </StyledListItem>
  )
}

const StyledNavListItem = styled.li`
  img {
    width: 640px;
    height: 240px;
    border-radius: 10px;
  }
`

export function NavListItem(props) {
  return (
    <StyledNavListItem>
      <NavLink to={props.to}>
        <img src={props.img} alt='Ítem do cardápio'/>
      </NavLink>
    </StyledNavListItem>
  )
}