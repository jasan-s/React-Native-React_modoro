import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import { Settings } from '~/components'

export default class SettingsContainer extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired
  }
  state = {}
  render () {
    return (
      <Settings onBack ={this.props.navigator.pop}/>
    )
  }
}
