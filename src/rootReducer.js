/*
the reducer combiner takes care of putting the routing ans urlhandler reducers together.
*/

import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import urlhandler from './urlhandler'

export default combineReducers({
  routing: routerReducer,
  urlhandler
})
