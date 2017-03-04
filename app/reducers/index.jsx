import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  products : require('./products').default,
  brews : require('./brews').default,
  sellers : require('./sellers').default,
  flavors : require('./flavors').default,
})

export default rootReducer
