import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native'
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view'

export default function TabBar(props) {
  const { events, calendars } = props
  const numberOfCalendars = calendars.length
  const renderCalendarsTitles = () => {
    return calendars.map((Calendar) => {
      return <View><Text key={Calendar.title}> Calender Title: {Calendar.title} Calender Source: {Calendar.source}</Text></View>
    })
  }
  return (
    <ScrollableTabView
          style={{marginTop: 20 }}
          initialPage={0}
          renderTabBar={() => <props.CustomTabBar />}
          >
          <ScrollView tabLabel="ios-paper" style={styles.tabView}>
            <View style={styles.card}>
              <TouchableOpacity onPress={props.handleCalenderPermisson}><Text>News</Text></TouchableOpacity>
              {events[0]
                ? <View>
                    <Text> Event: {events[0].title}</Text>
                  <Text> Location: {events[0].location}</Text>
                </View>
                : null}
              {calendars
                ? <View>
                  {renderCalendarsTitles()}
                </View>
                : null}
            </View>
          </ScrollView>
          <ScrollView tabLabel="ios-people" style={styles.tabView}>
            <View style={styles.card}>
              <Text>Friends</Text>
            </View>
          </ScrollView>
          <ScrollView tabLabel="ios-chatboxes" style={styles.tabView}>
            <View style={styles.card}>
              <Text>Messenger</Text>
            </View>
          </ScrollView>
        </ScrollableTabView>
  )
}

TabBar.propTypes = {}
TabBar.defaultProps = {}

const styles = StyleSheet.create({
  tabView: {
    flex: 1,
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.01)',
  },
  card: {
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: 'rgba(0,0,0,0.1)',
    margin: 5,
    height: 600,
    padding: 15,
    shadowColor: '#ccc',
    shadowOffset: { width: 2, height: 2, },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
})
