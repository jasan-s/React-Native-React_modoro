import React, { Component } from 'react';
import { View, StyleSheet, Platform, Dimensions  } from 'react-native';
import { TabViewAnimated, TabBar, TabViewPagerScroll, TabViewPagerPan } from 'react-native-tab-view';
import Icon from 'react-native-vector-icons/Ionicons'
import { InteractableContainer } from '~/containers'

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
}


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

  renderFooter = (props) => {
    return <TabBar {...props} renderIcon={this.renderIcon} scrollEnabled={false}/>;
  };

  renderScene = ({ route }) => {
    switch (route.key) {
    case '1':
      return <InteractableContainer />
    case '2':
      return <View style={[ styles.page, { backgroundColor: '#ff6f69' } ]} />;
    default:
      return null;
    }
  };

   renderPager = (props) => {
   return (Platform.OS === 'ios') ? <TabViewPagerScroll {...props} /> : <TabViewPagerPan {...props} />
  }

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
        renderFooter={this.renderFooter}
        onRequestChangeTab={this.handleChangeTab}
        swipeEnabled ={false}
        animationEnabled ={false}
        renderPager={this.renderPager}
        initialLayout={initialLayout}
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
});
