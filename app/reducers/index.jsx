import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  products : require('./products').default, // includes inventories
  brews : require('./brews').default,
  sellers : require('./sellers').default,
  flavors : require('./flavors').default,
  cart : require('./cart').default,
  reviews : require('./reviews').default,
})

export default rootReducer
