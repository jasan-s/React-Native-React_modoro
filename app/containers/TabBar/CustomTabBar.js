import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export default class CustomTabBar extends Component {
  static propTypes = {
    goToPage: React.PropTypes.func,
    activeTab: React.PropTypes.number,
    tabs: React.PropTypes.array,
  }
  static defaultProps = {}
  constructor(props) {
    super(props)
    this.state = {}
    this.tabIcons = []
  }

  componentDidMount() {
    this._listener = this.props.scrollValue.addListener(this.setAnimationValue)
  }

  setAnimationValue = ({ value }) => {
    this.tabIcons.forEach((icon, i) => {
      const progress = Math.min(1, Math.abs(value - i))
      icon.setNativeProps({
        style: {
          color: this.iconColor(progress),
        },
      })
    })
  }

  // color between rgb(59,89,152) and rgb(204,204,204)
  iconColor = (progress) => {
    const red = 59 + (204 - 59) * progress
    const green = 89 + (204 - 89) * progress
    const blue = 152 + (204 - 152) * progress
    return `rgb(${red}, ${green}, ${blue})`
  }

  render() {
        const containerWidth = this.props.containerWidth
    const numberOfTabs = this.props.tabs.length

    const tabUnderlineStyle = {
      position: 'absolute',
      width: containerWidth / numberOfTabs,
      height: 2,
      backgroundColor: 'navy',
      bottom: 0,
    }

    const left = this.props.scrollValue.interpolate({
      inputRange: [0, 1, ], outputRange: [0,  containerWidth / numberOfTabs, ]
    })
    return (
      <View style={[styles.tabs, this.props.style, ]}>
        {this.props.tabs.map((tab, i) => {
          return <TouchableOpacity key={tab} onPress={() => this.props.goToPage(i)} style={styles.tab}>
            <Icon
              name={tab}
              size={30}
              color={this.props.activeTab === i ? 'rgb(59,89,152)' : 'rgb(204,204,204)'}
              ref={(icon) => { this.tabIcons[i] = icon; }}
            />
          </TouchableOpacity>;
        })}
        <Animated.View style={[tabUnderlineStyle, { left, }, this.props.underlineStyle, ]} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
  },
  tabs: {
    height: 45,
    flexDirection: 'row',
    paddingTop: 5,
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: 'rgba(0,0,0,0.05)',
  },
})
