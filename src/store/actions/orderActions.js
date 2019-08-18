import * as ActionsTypes from './orderActionsTypes'

export function addOrder(order) {
  return {
    type: ActionsTypes.ADD_ORDER,
    order: order
  }
}

export function removeOrder(id) {
  return {
    type: ActionsTypes.REMOVE_ORDER,
    id: id
  }
}