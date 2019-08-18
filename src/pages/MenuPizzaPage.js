import React from 'react'
import { useSelector } from 'react-redux'
import { Page, Main } from '../components/PageComponents'
import PrivateSideBar from '../components/PrivateSideBar'
import { List, ListItem } from '../components/ListComponents'

function MenuPizzaPage() {
  const menuPizza = useSelector(
    (state) => {
      return state.menu.pizza
    }
  )
  return (
    <Page>
      <PrivateSideBar/>
      <Main>
        <List>
          {
            menuPizza.map(
              (cur,idx) => {
                return (
                  <ListItem
                    key={idx}
                    img={cur.img}
                    food='pizza'
                    flavor={cur.flavor}
                    sizes={cur.sizes}
                    prices={cur.prices}
                  />
                )
              }
            )
          }
        </List>
      </Main>
    </Page>
  )
}

export default MenuPizzaPage