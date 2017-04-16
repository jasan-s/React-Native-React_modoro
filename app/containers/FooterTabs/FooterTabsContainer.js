import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { FooterTabs } from '~/components'
import { connect } from 'react-redux'
import * as ActionCreators from '~/redux/modules/activeFooterTab'

class FooterTabsContainer extends Component {
  static propTypes = {
    activeFooterTab: PropTypes.string.isRequired,
    setFooterTab: PropTypes.func.isRequired,
    navigator: PropTypes.object.isRequired
  }
  state = {}
  render () {
    return (
      <FooterTabs
      activeFooterTab= {this.props.activeFooterTab}
      setFooterTab = {this.props.setFooterTab}
      navigator = {this.props.navigator}
      userIcon= {this.state.userIcon}/>
    )
  }
}

function mapStateToProps (state, props) {
  return {
    activeFooterTab: state.activeFooterTab,
    navigator: props.navigator
  }
}

function mapDispatchToProps (dispatch, props) {
  return bindActionCreators(ActionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FooterTabsContainer)