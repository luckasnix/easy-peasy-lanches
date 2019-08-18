import React from 'react'
import { useSelector } from 'react-redux'
import { Page, Main } from '../components/PageComponents'
import PrivateSideBar from '../components/PrivateSideBar'
import { List, ListItem } from '../components/ListComponents'

function MenuSandwichPage() {
  const menuSandwich = useSelector(
    (state) => {
      return state.menu.sandwich
    }
  )
  return (
    <Page>
      <PrivateSideBar/>
      <Main>
        <List>
          {
            menuSandwich.map(
              (cur,idx) => {
                return (
                  <ListItem
                    key={idx}
                    img={cur.img}
                    food='sanduíche'
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

export default MenuSandwichPage