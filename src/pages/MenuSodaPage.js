import React from 'react'
import { useSelector } from 'react-redux'
import { Page, Main } from '../components/PageComponents'
import PrivateSideBar from '../components/PrivateSideBar'
import { List, ListItem } from '../components/ListComponents'

function MenuSodaPage() {
  const menuSoda = useSelector(
    (state) => {
      return state.menu.soda
    }
  )
  return (
    <Page>
      <PrivateSideBar/>
      <Main>
        <List>
          {
            menuSoda.map(
              (cur,idx) => {
                return (
                  <ListItem
                    key={idx}
                    img={cur.img}
                    food='refrigerante'
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

export default MenuSodaPage