import { createReducer } from 'redux-create-reducer'
import * as ActionsTypes from '../actions/orderActionsTypes'

const initialState = []

const orderReducer = createReducer(
  initialState,
  {
    [ActionsTypes.ADD_ORDER]: (state,action) => {
      return state.concat(action.order)
    },
    [ActionsTypes.REMOVE_ORDER]: (state,action) => {
      return state.filter(
        (cur) => {
          return cur.id !== action.id
        }
      )
    }
  }
)

export default orderReducer