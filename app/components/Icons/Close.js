import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { colors } from '~/styles'

Close.propTypes = {
  onPress: PropTypes.func.isRequired,
  style: PropTypes.object
}

export default function Close (props) {
  return (
    <TouchableOpacity onPress ={props.onPress} style = {props.style}>
    <Text style ={{color: colors.blue}}> Close </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({

})
