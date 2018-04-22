import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import urlhandler from './urlhandler'

export default combineReducers({
  routing: routerReducer,
  urlhandler
})
