import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ActionCreators from '~/redux/modules/authentication'
import * as flashNotificationActionCreators from '~/redux/modules/flashNotification'
import { ReactModoroNavigator } from '~/containers'
import { PreSplash, FlashNotification } from '~/components'
import { firebaseAuth } from '~/config/constants'

class AppContainer extends Component {
  static propTypes = {
    isAuthenticating: PropTypes.bool.isRequired,
    isAuthed: PropTypes.bool.isRequired,
    onAuthChange: PropTypes.func.isRequired,
    flashNotificationIsPermanent: PropTypes.bool.isRequired,
    flashNotificationLocation: PropTypes.string.isRequired,
    flashNotificationText: PropTypes.string.isRequired,
    showFlashNotification: PropTypes.bool.isRequired,
    hideFlashNotification: PropTypes.func.isRequired
  }

  componentDidMount () {
    firebaseAuth.onAuthStateChanged((user) => {
      // console.warn('firebase user: ', user)
      this.props.onAuthChange(user)
    })
  }

  handleHideNotification = () => {
    this.props.hideFlashNotification()
  }

  render () {
    return (
      <View style={{flex: 1}}>
        {this.props.isAuthenticating === true
            ? <PreSplash />
            : <ReactModoroNavigator
                isAuthed = {this.props.isAuthed}/>}
          {this.props.showFlashNotification === true
           ? <FlashNotification
               permanent={this.props.flashNotificationIsPermanent}
               location={this.props.flashNotificationLocation}
               text={this.props.flashNotificationText}
               onHideNotification={this.handleHideNotification}/>
          : null}
      </View>
    )
  }
}

function mapStateToProps ({authentication, flashNotification}) {
  return {
    isAuthenticating: authentication.isAuthenticating,
    isAuthed: authentication.isAuthed,
    flashNotificationIsPermanent: flashNotification.permanent,
    flashNotificationLocation: flashNotification.location,
    flashNotificationText: flashNotification.text,
    showFlashNotification: flashNotification.showFlashNotification
  }
}

function mapDispatchToProps (dispatch, props) {
  return bindActionCreators({...ActionCreators, ...flashNotificationActionCreators}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
