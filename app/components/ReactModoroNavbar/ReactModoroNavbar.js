import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, Text } from 'react-native'
import NavigationBar from 'react-native-navbar'
import { colors } from '~/styles'

ReactModoroNavbar.propTypes = {
  title: PropTypes.string.isRequired,
  rightButton: PropTypes.element,
  leftButton: PropTypes.element
}

export default function ReactModoroNavbar (props) {
  let optionalAttrs = {}
  // this is done beacuse react-native-navbar cant accept null it only accepts object or react Element
  props.leftButton && (optionalAttrs.leftButton = React.cloneElement(props.leftButton,
    {style: {marginLeft: 10, justifyContent: 'center'}}))
  props.rightButton && (optionalAttrs.rightButton = React.cloneElement(props.rightButton,
    {style: {marginRight: 10, justifyContent: 'center'}}))
  return (
    <NavigationBar
    {...optionalAttrs}
      title= {{title: props.title}}
      tintColor={colors.tabPrimary}/>
  )
}

const styles = StyleSheet.create({

})
