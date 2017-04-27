import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet } from 'react-native'

export default function CardSection(props) {
  const { containerstyle } = styles
  return (
    <View style={[containerstyle, props.style]} >
      {props.children}
    </View>
  )
}

CardSection.propTypes = {

}

const styles = StyleSheet.create({
  containerstyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
  },
})
