import { LinearGradient } from 'expo';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

import WaitInfo from '../components/WaitInfo';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: scale(20),
  },
});

export default class Wait extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <LinearGradient
        colors={['#2196F3', '#0D47A1']}
        style={styles.root}
      >
        <WaitInfo 
          qType={0}
          pType={0}
          start={Date.now() + 1000 * 60 * 12 + 1000 * 32}
        />
      </LinearGradient>
    )
  }
}
