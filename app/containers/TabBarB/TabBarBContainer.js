import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { TabViewAnimated, TabBar } from 'react-native-tab-view';
import { ListsContainer } from '~/containers'
import TabBarBottom from './TabBarBottom'
import Icon from 'react-native-vector-icons/Ionicons'


export default class TabViewExample extends Component {
  state = {
    index: 1,
    routes: [
      { key: '1', icon: 'md-person'},
      { key: '2', icon: 'md-infinite' },
      { key: '3', icon: 'ios-people' },
    ],
  };

  handleChangeTab = (index) => {
    this.setState({ index });
  };

  renderHeader = (props) => {
    return <TabBar {...props} style={styles.tabBar} scrollEnabled ={false} renderIcon={this.renderIcon}/>;
  };

  renderScene = ({ route }) => {
    switch (route.key) {
    case '1':
      return <TabBarBottom />
    case '2':
          return (
            <View style={[ styles.page, { backgroundColor: '#f37735' } ]}>
            <View style={styles.forwardArrow}>
          <Icon
            name= 'ios-arrow-forward'
            size={80}
            color= 'white'/>
            </View>
            </View>)
    case '3':
      return <ListsContainer />;
    default:
      return null;
    }
  };

  renderIcon = ({ route }) => {
    return <Icon
        name= {route.icon}
        size={30}
        color= 'white'/>
  }

  render() {
    return (
      <TabViewAnimated
        style={styles.container}
        navigationState={this.state}
        renderScene={this.renderScene}
        renderHeader={this.renderHeader}
        onRequestChangeTab={this.handleChangeTab}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBar:{
    paddingTop: 12,
  },
  forwardArrow: {
    position: 'absolute',
    bottom: 55,
    right: 55,
  },
});