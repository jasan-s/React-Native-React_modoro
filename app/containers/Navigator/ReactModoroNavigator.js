import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Platform } from 'react-native'
import { Navigator } from 'react-native-deprecated-custom-components'
import { SplashContainer, FooterTabsContainer, SettingsContainer, TabBarContainer, TabBarBContainer } from '~/containers'

export default class ReactModoroNavigator extends Component {
  static propTypes = {
    isAuthed: PropTypes.bool.isRequired
  }
  renderScene = (route, navigator) => {
    if (this.props.isAuthed === false) {
      return <SplashContainer navigator={navigator} />
    } else if (route.settings === true) {
      return <SettingsContainer navigator={navigator} />
    } else {
      return <FooterTabsContainer navigator={navigator} />
    }
  }
  configureScene = (route) => {
    if (Platform.OS === 'android') {
      return Navigator.SceneConfigs.FloatFromBottomAndroid
    }
    if (route.settings === true) {
      return Navigator.SceneConfigs.FloatFromBottom
    }
    return Navigator.SceneConfigs.FloatFromRight
  }
  render () {
    return (
      <Navigator
        initialRoute = {{}}
        renderScene={this.renderScene}
        configureScene={this.configureScene} />
    )
  }
}