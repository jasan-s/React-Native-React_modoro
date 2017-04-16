import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Splash } from '~/components'
import { LoginManager } from 'react-native-fbsdk'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as ActionCreators from '~/redux/modules/authentication'

class SplashContainer extends Component {
  static propTypes = {
    handleAuthWithFirebase: PropTypes.func.isRequired
  }

  handleSignin = () => {
    // Attempt a login using the Facebook login dialog asking for default permissions.
    LoginManager.logInWithReadPermissions(['public_profile']).then(
      function (result) {
        if (result.isCancelled) {
          alert('Login cancelled')
        } else {
          alert('Login success with permissions: ' + result.grantedPermissions.toString())
        }
      },
      function (error) {
        alert('Login fail with error: ' + error)
      }
    )
  }

  handleOnLoginFinished = (error, result) => {
    if (error) {
      console.warn('Error: ', error)
    } else if (result.isCancelled === true) {
      console.warn('User Cancelled Log in with Facebook')
    } else {
      console.warn('Login Success with facebook')
      // At this point User has been authenticated with Facebook , So now use the the AccesToken to Autheticate with Firebase
      this.props.handleAuthWithFirebase()
    }
  }

  render () {
    return (
    <Splash
    onLoginFinished = {this.handleOnLoginFinished}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(SplashContainer)