import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { toCapitalize, formatPrice } from '../libraries/Formatter'
import * as Actions from '../store/actions/orderActions'

const StyledTable = styled.table`
  width: 640px;
  height: auto;
  border-collapse: collapse;
  border-radius: 10px;
  font-family: "Blinker";
  font-size: 18px;
  text-align: left;
  color: #e84118;
  overflow: hidden;
  tr {
    background-color: #e7c17f;
  }
  th {
    padding: 10px;
  }
`

export function Table(props) {
  return (
    <StyledTable>
      <thead>
        <tr>
          {
            props.headTitles.map(
              (cur,idx) => {
                return <th key={idx}>{toCapitalize(cur)}</th>
              }
            )
          }
          <th></th>
        </tr>
      </thead>
      <tbody>
        {props.children}
      </tbody>
    </StyledTable>
  )
}

const StyledTableItem = styled.tr`
  background-color: #fad390;
  td {
    padding: 10px;
  }
`

const StyledTableItemBtn = styled.td`
  text-align: center;
  button {
    width: 120px;
    height: 40px;
    font-family: "Blinker";
    font-size: 20px;
    color: #f5f6fa;
    border: none;
    border-radius: 20px;
    background-color: #e84118;
    cursor: pointer;
  }
`

export function TableItem(props) {
  const dispatch = useDispatch()
  const removeOrder = useCallback(
    (id) => {
      dispatch(Actions.removeOrder(id))
    },
    [dispatch]
  )
  const removeFood = useCallback(
    () => {
      removeOrder(props.id)
    },
    [props.id, removeOrder]
  )
  return (
    <StyledTableItem>
      <td>{toCapitalize(props.food)}</td>
      <td>{toCapitalize(props.flavor)}</td>
      <td>{toCapitalize(props.size)}</td>
      <td>{props.amount}</td>
      <td>{formatPrice(props.price)}</td>
      <StyledTableItemBtn>
        <button onClick={removeFood}>Remover</button>
      </StyledTableItemBtn>
    </StyledTableItem>
  )
}

const StyledTableResult = styled.div`
  width: 640px;
  height: 80px;
  display: grid;
  justify-content: center;
  align-content: center;
  grid-auto-flow: column;
  grid-gap: 20px;
  font-family: 'Blinker';
  font-size: 18px;
  color: #e84118;
  border-radius: 10px;
  background-color: #e7c17f;
  p {
    align-self: center;
    font-family: 'Blinker';
    font-size: 18px;
    color: #e84118;
  }
  button {
    width: 180px;
    height: 40px;
    font-family: "Blinker";
    font-size: 20px;
    color: #f5f6fa;
    border: none;
    border-radius: 20px;
    background-color: #27ae60;
    cursor: pointer;
  }
`

export function TableResult(props) {
  return (
    <StyledTableResult>
      <p>
        {formatPrice(props.result) + ' + ' + formatPrice(props.tax) + ' (taxa de entrega) = '}
        <strong>
          {formatPrice(props.result + props.tax)}
        </strong>
      </p>
      <button onClick={props.onClick}>{props.title}</button>
    </StyledTableResult>
  )
}