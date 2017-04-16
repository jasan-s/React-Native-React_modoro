import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, Text, Platform } from 'react-native'
import { ReactModoroNavbar, Hamburger } from '~/components'

Leaderboard.propTypes = {
  openDrawer: PropTypes.func
}

export default function Leaderboard (props) {
  return (
    <View>
      <ReactModoroNavbar
        title ={'Hello'}
        leftButton= {Platform.OS === 'android' ? <Hamburger onPress ={props.openDrawer}/> : null}/>
      <Text>
        Leaderboard!!!
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({

})
