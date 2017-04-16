import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { ReactModoroNavbar, Close } from '~/components'
import { colors } from '~/styles'

Settings.propTypes = {
  onBack: PropTypes.func.isRequired
}

export default function Settings (props) {
  return (
    <View style={styles.container}>
    <ReactModoroNavbar
      title =' Settings'
      leftButton= {<Close onPress ={props.onBack} />}/>
      <Text>
        Settings
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  }

})
