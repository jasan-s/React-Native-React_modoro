import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { TabViewAnimated, TabBar } from 'react-native-tab-view';
import { ListsContainer } from '~/containers'


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

export default class TabViewExample extends Component {
  state = {
    index: 1,
    routes: [
      { key: '1', title: 'First' },
      { key: '2', title: 'Second' },
      { key: '3', title: 'Third' },
    ],
  };

  _handleChangeTab = (index) => {
    this.setState({ index });
  };

  _renderHeader = (props) => {
    return <TabBar {...props} />;
  };

  _renderScene = ({ route }) => {
    switch (route.key) {
    case '1':
      return <ListsContainer />;
    case '2':
      return <View style={[ styles.page, { backgroundColor: '#673ab7' } ]} />;
    case '3':
      return <View style={[ styles.page, { backgroundColor: '#8bb73b' } ]} />;
    default:
      return null;
    }
  };

  render() {
    return (
      <TabViewAnimated
        style={styles.container}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onRequestChangeTab={this._handleChangeTab}
      />
    );
  }
}