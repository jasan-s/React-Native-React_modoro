import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, Text, TabBarIOS } from 'react-native'
import { colors } from '~/styles'
import { HomeContainer, LeaderboardContainer } from '~/containers'
import Icon from 'react-native-vector-icons/Ionicons'

FooterTabs.propTypes = {
  activeFooterTab: PropTypes.string.isRequired,
  setFooterTab: PropTypes.func.isRequired,
  navigator: PropTypes.object.isRequired
}

export default function FooterTabs (props) {
  return (
      <TabBarIOS tintColor = {colors.active}>
        <Icon.TabBarItem
        iconSize= {35}
        title= 'Home'
        iconName= 'ios-home-outline'
        selected = {props.activeFooterTab === 'home'}
        onPress = {() => { props.setFooterTab('home') }}>
        <HomeContainer navigator= {props.navigator} />
        </Icon.TabBarItem>
        <Icon.TabBarItem
        iconSize= {35}
        title= 'Leaderboard'
        iconName='ios-trophy-outline'
        selected = {props.activeFooterTab === 'leaderboard'}
        onPress = {() => { props.setFooterTab('leaderboard') }}>
        <LeaderboardContainer navigator= {props.navigator}/>
        </Icon.TabBarItem>
      </TabBarIOS>
  )
}
