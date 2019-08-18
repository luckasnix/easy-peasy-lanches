import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom'
import firebase from 'firebase/app'
import 'firebase/auth'
import { SideNavBar, SideNavBarLogo, SideNavBarBtn, SideNavBarLogOutBtn } from '../components/NavBarComponents'
import * as Actions from '../store/actions/userActions'
import menuIcon from '../images/menu-icon.svg'
import orderIcon from '../images/order-icon.svg'
import profileIcon from '../images/profile-icon.svg'
import logOutBtn from '../images/log-out-icon.svg'

function PrivateSideBar(props) {
  const dispatch = useDispatch()
  const deleteUserData = useCallback(
    () => {
      dispatch(Actions.deleteUserData())
    },
    [dispatch]
  )
  const logOut = useCallback(
    () => {
      firebase
        .auth()
        .signOut()
        .then(
          () => {
            props.history.replace('/')
            deleteUserData()
          }
        )
    },
    [props.history, deleteUserData]
  )
  return (
    <SideNavBar>
      <SideNavBarLogo/>
      <SideNavBarBtn to='/menu' icon={menuIcon} title='Cardápio'/>
      <SideNavBarBtn to='/order' icon={orderIcon} title='Pedido'/>
      <SideNavBarBtn to='/profile' icon={profileIcon} title='Perfil'/>
      <SideNavBarLogOutBtn icon={logOutBtn} title='Saída' onClick={logOut}/>
    </SideNavBar>
  )
}

export default withRouter(PrivateSideBar)