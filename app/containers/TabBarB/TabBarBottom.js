import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { TabViewAnimated, TabBar } from 'react-native-tab-view';
import Icon from 'react-native-vector-icons/Ionicons'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class TabBarBottom extends Component {
  state = {
    index: 0,
    routes: [
      { key: '1', icon: 'ios-card' },
      { key: '2', icon: 'ios-mail-open' }
    ],
  };

  handleChangeTab = (index) => {
    this.setState({ index });
  };

  renderHeader = (props) => {
    return <TabBar {...props} renderIcon={this.renderIcon}/>;
  };

  renderScene = ({ route }) => {
    switch (route.key) {
    case '1':
      return <View style={[ styles.page, { backgroundColor: '#96ceb4' } ]} />;
    case '2':
      return <View style={[ styles.page, { backgroundColor: '#ff6f69' } ]} />;
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
        renderFooter={this.renderHeader}
        onRequestChangeTab={this.handleChangeTab}
        swipeEnabled ={false}
        animationEnabled ={false}
      />
    );
  }
}