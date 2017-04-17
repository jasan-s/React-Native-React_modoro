import React from 'react'
import { AppContainer } from './containers'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import * as reducers from './redux'
import { composeWithDevTools } from 'remote-redux-devtools'
import { LOGGING_OUT } from './redux/modules/authentication'

const appReducer = combineReducers(reducers)

// this function(reducer) run at all action calls and checks if action type is LOGGING_OUT if so it sets state of all reducers to undefined, thus that sets them back to intial defined state
function rootReducer (state, action) {
  if (action.type === LOGGING_OUT) {
    state = undefined
  }
  // if the action is not LOOGING_OUT nothing happens the appReducer just gets passed through to crearting a store
  return appReducer(state, action)
}

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default function ReactModoro (props) {
  return (
    <Provider store = {store}>
    <AppContainer />
    </Provider>
  )
}
