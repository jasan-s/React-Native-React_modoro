import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CustomTabBar from './CustomTabBar'
import { TabBar } from '~/components'

export default class TabBarContainer extends Component {

  static propTypes = {}
  static defaultProps = {}
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <TabBar CustomTabBar={CustomTabBar}/>
    )
  }
}
