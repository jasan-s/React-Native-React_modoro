import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import { TabBarBContainer } from '~/containers'
import { Router, Scene } from 'react-native-router-flux'


export default class Routes extends Component {

  static propTypes = {}
  static defaultProps = {}
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Router>
        <Scene key='root'>
          <Scene hideNavBar  key='home' component={TabBarBContainer} tabs ={true} initial={true} />
        </Scene>
      </Router>
    )
  }
}
