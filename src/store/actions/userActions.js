import * as ActionsTypes from './userActionsTypes'

export function insertUserData(userData) {
  return {
    type: ActionsTypes.INSERT_USER_DATA,
    userData: userData
  }
}

export function deleteUserData() {
  return {
    type: ActionsTypes.DELETE_USER_DATA
  }
}