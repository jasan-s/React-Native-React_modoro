import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, Image, Animated, StyleSheet } from 'react-native'
import styled from 'styled-components/native'
import * as Animatable from 'react-native-animatable'
import { colors } from '~/styles'

export default class PreSplash extends Component {
  static propTypes = {}
  state = {
    rotation: new Animated.Value(0)
  }

  componentDidMount () {
    this.spin()
  }

  componentWillUnmount () {
    window.clearInterval(this.interval)
  }

  spin () {
    this.interval = setInterval(() => {
      Animated.sequence([
        Animated.timing(this.state.rotation, {toValue: 1, duration: 420}),
        Animated.timing(this.state.rotation, {toValue: 0, duration: 20})
      ]).start()
    }, 1000)
  }

  getTransform () {
    return {
      transform: [
        {
          rotate: this.state.rotation.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
          })
        }
      ]
    }
  }

  render () {
    return (
      <StyledView>
      <AnimatingBall animation = 'rotate' iterationCount='infinite' easing= 'ease-in-out'
       source={require('../../images/basketball.png')} />
       <StyledText color = {colors.primary}> Loading...</StyledText>
      </StyledView>
    )
  }
}

  const StyledView = styled.View`
    flex:1;
    justify-content: center;
    align-items: center;
  `

  const StyledImage = styled.Image`
  resize-mode: contain;
  height: 10%;
  `
  const StyledText = styled.Text`
  color:${props => props.color};
  `
  const AnimatingBall = Animatable.createAnimatableComponent(StyledImage)
