import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import { Settings } from '~/components'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as ActionCreators from '~/redux/modules/authentication'

class SettingsContainer extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
    handleUnAuth: PropTypes.func.isRequired
  }
  state = {
    timerDuration: 20,
    restDuration: 5,
  }
  handleTimerChange = (timerDuration) => {
    this.setState({timerDuration})
  }
  handleRestChange = (restDuration) => {
    this.setState({restDuration})
  }
  handleTimerComplete = () => {
    console.log('Finished Sliding Timer')
  }
  handleRestComplete = () => {
    console.log('Finished Sliding Rest Timer')
  }
  handleLogout = () => {
    console.log('Logging Out!')
    this.props.handleUnAuth()
  }
  render () {
    return (
      <Settings
        onBack={this.props.navigator.pop}
        onLogout={this.handleLogout}
        onRestComplete={this.handleRestComplete}
        onTimerComplete={this.handleTimerComplete}
        onTimerChange={this.handleTimerChange}
        onRestChange={this.handleRestChange}
        timerDuration={this.state.timerDuration}
        restDuration={this.state.restDuration} />
    )
  }
}

function mapStateToProps (state, props) {
  return {
  }
}

function mapDispatchToProps (dispatch, props) {
  return bindActionCreators(ActionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsContainer)