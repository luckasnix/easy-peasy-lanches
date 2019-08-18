import * as ActionsTypes from './menuActionsTypes'

export function insertMenu(menu) {
  return {
    type: ActionsTypes.INSERT_MENU,
    menu: menu
  }
}

export function deleteMenu() {
  return {
    type: ActionsTypes.DELETE_MENU
  }
}