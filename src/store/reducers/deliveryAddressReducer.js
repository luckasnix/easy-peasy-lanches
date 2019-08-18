import { createReducer } from 'redux-create-reducer'
import * as ActionsTypes from '../actions/deliveryAddressActionsTypes'

const initialState = {
  district: '',
  street: '',
  number: '',
  complement: ''
}

const deliveryAddressReducer = createReducer(
  initialState,
  {
    [ActionsTypes.INSERT_DELIVERY_ADDRESS]: (_,action) => {
      return action.deliveryAddress
    }
  }
)

export default deliveryAddressReducer