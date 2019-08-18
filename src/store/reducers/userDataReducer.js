import { createReducer } from 'redux-create-reducer'
import * as ActionsTypes from '../actions/userActionsTypes'

const initialState = null

const userDataReducer = createReducer(
  initialState,
  {
    [ActionsTypes.INSERT_USER_DATA]: (_,action) => {
      return action.userData
    },
    [ActionsTypes.DELETE_USER_DATA]: () => {
      return null
    }
  }
)

export default userDataReducer