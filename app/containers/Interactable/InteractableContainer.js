import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import SnapTo from './SnapTo'
import CollapsingHeader from './CollapsingHeader'
import ChatHeads from './ChatHeads'
import TouchesInside from './TouchesInside'
import AlertAreas from './AlertAreas'
import Drawers from './Drawers'
import CollapsibleFilter from './CollapsibleFilter'
import Test from './Test'

export default class InteractableContainer extends Component {

  static propTypes = {}
  static defaultProps = {}
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
        <Test />
    )
  }
}
