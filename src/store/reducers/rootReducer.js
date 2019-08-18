import { combineReducers } from 'redux'
import userDataReducer from './userDataReducer'
import deliveryAddressReducer from './deliveryAddressReducer'
import menuReducer from './menuReducer'
import orderReducer from './orderReducer'

const rootReducer = combineReducers(
  {
    userData: userDataReducer,
    deliveryAddress: deliveryAddressReducer,
    menu: menuReducer,
    order: orderReducer
  }
)

export default rootReducer