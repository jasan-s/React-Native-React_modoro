import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Navigator, Platform } from 'react-native'
import { SplashContainer, FooterTabsContainer, SettingsContainer, TabBarContainer } from '~/containers'

export default class ReactModoroNavigator extends Component {
  static propTypes = {
    isAuthed: PropTypes.bool.isRequired
  }
  renderScene = (route, navigator) => {
    if (this.props.isAuthed === false) {
      return <TabBarContainer navigator={navigator} />
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