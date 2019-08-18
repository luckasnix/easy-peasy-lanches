import React from 'react'
import { Page, Main } from '../components/PageComponents'
import PrivateSideBar from '../components/PrivateSideBar'
import { List, NavListItem } from '../components/ListComponents'
import pizzaImage from '../images/pizza-img.jpg'
import sandwichImage from '../images/sandwich-img.jpg'
import sodaImage from '../images/soda-img.jpg'
import iceCreamImage from '../images/ice-cream-img.jpg'

function MenuPage() {
  return (
    <Page>
      <PrivateSideBar/>
      <Main>
        <List>
          <NavListItem to='/menu/pizza' img={pizzaImage}/>
          <NavListItem to='/menu/sandwich' img={sandwichImage}/>
          <NavListItem to='/menu/soda' img={sodaImage}/>
          <NavListItem to='/menu/ice-cream' img={iceCreamImage}/>
        </List>
      </Main>
    </Page>
  )
}

export default MenuPage