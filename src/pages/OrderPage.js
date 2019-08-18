import React, { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { Page, Main } from '../components/PageComponents'
import PrivateSideBar from '../components/PrivateSideBar'
import { Table, TableItem, TableResult } from '../components/TableComponents'

function OrderPage() {
  const order = useSelector(
		(state) => {
			return state.order
		}
  )
  const pricesArr = order.map(
    (cur) => {
      return cur.price
    }
  )
  const totalPrice = pricesArr.reduce(
    (accum, cur) => {
      return accum + cur
    },
    0
  )
  const sendOrder = useCallback(
    () => {
      window.alert('Pedido enviado!')
    },
    []
  )
  return (
    <Page>
      <PrivateSideBar/>
      <Main>
        <Table headTitles={['comida', 'sabor', 'tamanho', 'qnt', 'preço']}>
          {
            order.map(
              (cur,idx) => {
                return (
                  <TableItem
                    key={idx}
                    id={cur.id}
                    food={cur.food}
                    flavor={cur.flavor}
                    size={cur.size}
                    amount={cur.amount}
                    price={cur.price}
                  />
                )
              }
            )
          }
        </Table>
        <TableResult result={totalPrice} tax={1000} title='Finalizar Pedido' onClick={sendOrder}/>
      </Main>
    </Page>
  )
}

export default OrderPage