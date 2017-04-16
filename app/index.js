import React from 'react'
import { AppContainer } from './containers'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import * as reducers from './redux'
import { composeWithDevTools } from 'remote-redux-devtools'

const store = createStore(
  combineReducers(reducers),
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
