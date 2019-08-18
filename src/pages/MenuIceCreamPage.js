import React from 'react'
import { useSelector } from 'react-redux'
import { Page, Main } from '../components/PageComponents'
import PrivateSideBar from '../components/PrivateSideBar'
import { List, ListItem } from '../components/ListComponents'

function MenuIceCreamPage() {
  const menuIceCream = useSelector(
    (state) => {
      return state.menu.iceCream
    }
  )
  return (
    <Page>
      <PrivateSideBar/>
      <Main>
        <List>
          {
            menuIceCream.map(
              (cur,idx) => {
                return (
                  <ListItem
                    key={idx}
                    img={cur.img}
                    food='sorvete'
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

export default MenuIceCreamPage