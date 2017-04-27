import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CustomTabBar from './CustomTabBar'
import { TabBar } from '~/components'
import RNCalendarEvents from 'react-native-calendar-events'

export default class TabBarContainer extends Component {

  static propTypes = {}
  static defaultProps = {}
  constructor(props) {
    super(props)
    this.state = { events: [], calendars: []}
  }
  handleCalenderPermisson = () => {
    RNCalendarEvents.authorizationStatus()
      .then(status => {
        // handle status
        console.log('Calender permissions status: ', status)
        RNCalendarEvents.authorizeEventStore()
          .then(status => {
          // handle status
          console.log('User Calener permisson : ', status)
          RNCalendarEvents.findCalendars()
            .then(calendars => {
              // handle calendars
              console.log('FETCHED calendars: ', calendars)
              this.setState({calendars: calendars})
            })
            .catch(error => {
              // handle error
            });
          RNCalendarEvents.fetchAllEvents('2017-05-28T00:00:00.000Z', '2017-05-29T00:00:00.000Z', ['1', '2'])
            .then(events => {
              // handle events
              console.log('FETCHED EVENTS: ', events)
              this.setState({events: events})
            })
            .catch(error => {
             // handle error
             console.log('ERROR FETCHING EVENTS: ', error)
            });
          }).catch(error => {
          // handle error
          console.log('Calender Permisson Error :', error)
          });

      }).catch(error => {
        // handle error
        console.log('Checking Calender permissions Error: ', error)
    })
  }

  render() {
    return (
      <TabBar
      CustomTabBar={CustomTabBar}
      handleCalenderPermisson ={() => this.handleCalenderPermisson()}
      events={this.state.events}
      calendars={this.state.calendars} />
    )
  }
}
