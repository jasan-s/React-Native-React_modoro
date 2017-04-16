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
        <TabBarIOS.Item
        iconSize= {35}
        style={styles.tabContent}
        title= 'Home'
        iconName= 'ios-home-outline'
        selectedIconName='ios-home'
        selected = {props.activeFooterTab === 'home'}
        onPress = {() => { props.setFooterTab('home') }}>
        <HomeContainer navigator= {props.navigator} />
        </TabBarIOS.Item>
        <TabBarIOS.Item
        iconSize= {35}
        style={styles.tabContent}
        title= 'Leaderboard'
        iconName= 'ios-home-outline'
        selectedIconName='ios-about'
        selected = {props.activeFooterTab === 'leaderboard'}
        onPress = {() => { props.setFooterTab('leaderboard') }}>
        <LeaderboardContainer navigator= {props.navigator}/>
        </TabBarIOS.Item>
      </TabBarIOS>
  )
}

const styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tabText: {
    padding: 50,
    fontSize: 24
  }
})