import * as ActionsTypes from './deliveryAddressActionsTypes'

export function insertDeliveryAddress(deliveryAddress) {
  return {
    type: ActionsTypes.INSERT_DELIVERY_ADDRESS,
    deliveryAddress: deliveryAddress
  }
}

export function deleteDeliveryAddress() {
  return {
    type: ActionsTypes.DELETE_DELIVERY_ADDRESS
  }
}