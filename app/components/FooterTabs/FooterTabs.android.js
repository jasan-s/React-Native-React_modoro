import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, Text, DrawerLayoutAndroid } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { HomeContainer, LeaderboardContainer } from '~/containers'
import Drawer from './Drawer'

FooterTabs.propTypes = {
  activeFooterTab: PropTypes.string.isRequired,
  setFooterTab: PropTypes.func.isRequired,
  navigator: PropTypes.object.isRequired
}

export default function FooterTabs (props) {
  const closeDrawer = () => this.drawer.closeDrawer()
  const openDrawer = () => this.drawer.openDrawer()
  return (
    <DrawerLayoutAndroid
      ref = {(drawer) => { this.drawer = drawer }}
      drawerWidth= {290}
      renderNavigationView= {() => (
        <Drawer
        close = {closeDrawer}
        activeFooterTab = {props.activeFooterTab}
        setFooterTab = {props.setFooterTab}/>)}>
      {props.activeFooterTab === 'home'
      ? <HomeContainer
        openDrawer = {openDrawer}
        navigator= {props.navigator} />
      : <LeaderboardContainer
        openDrawer = {openDrawer}
        navigator= {props.navigator}/>}
    </DrawerLayoutAndroid>
  )
}

const styles = StyleSheet.create({

})
