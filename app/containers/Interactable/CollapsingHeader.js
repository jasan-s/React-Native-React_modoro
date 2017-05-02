import React, { Component } from 'react';
import { StyleSheet, View, Animated } from 'react-native';
import Interactable from 'react-native-interactable';

export default class CollapsingHeader extends Component {
  constructor(props) {
    super(props);
    this._deltaY = new Animated.Value(0);
  }
  render() {
    return (
      <View style={styles.container}>

          <View style={{backgroundColor: 'red', height: 250, alignItems: 'center'}}>
            <Animated.View style={{
              transform: [
                {
                  translateY: this._deltaY.interpolate({
                    inputRange: [-150, -150, 0, 0],
                    outputRange: [-50, -50, 0, 0]
                  })
                },
                {
                  scale: this._deltaY.interpolate({
                    inputRange: [-150, -150, 0, 0],
                    outputRange: [0.3, 0.3, 1, 1]
                  })
                }
              ]
            }}>
              <View style={{width: 150, height: 150, backgroundColor: 'blue', borderRadius: 75, marginTop: 50}} />
            </Animated.View>
          </View>

          <Interactable.View
            verticalOnly={true}
                      snapPoints={[
            {x: 0, y: -250},
            {x: 0, y: 250},
          ]}
            animatedValueY={this._deltaY}
            initialPosition={{x: 0, y: 0}} >
            <View style={{width: 70, height: 70, backgroundColor: 'green', borderRadius: 35}} />
          </Interactable.View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
});