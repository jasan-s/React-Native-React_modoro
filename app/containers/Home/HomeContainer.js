import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import { Home } from '~/components'

export default class HomeContainer extends Component {
  static propTypes = {
    openDrawer: PropTypes.func,
    navigator: PropTypes.object.isRequired
  }
  state = {}

// function set as a variable so can be passed as a variable
  handleToSettings = () => {
    this.props.navigator.push({
      settings: true
    })
  }

  render () {
    return (
      <Home
      openDrawer ={this.props.openDrawer}
      handleToSettings = {this.handleToSettings} />
    )
  }
}