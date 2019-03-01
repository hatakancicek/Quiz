import i18n from 'i18n-js';
import { LinearGradient } from 'expo';
import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

import WaitInfo from '../components/WaitInfo';
import TimeText from '../components/TimeText';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: scale(20),
  },
  timeText: {
    color: '#FFFFFF',
    fontSize: scale(70),
    fontFamily: 'Quicksand',
  },
  timeDescription: {
    color: '#DDDDDD',
    fontSize: scale(16),
    textAlign: 'center',
    maxWidth: scale(220),
    marginBottom: scale(30),
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
        <TimeText
          showHours={false}
          style={styles.timeText}
          target={Date.now() + 1000 * 60 * 12 + 1000 * 32}
        />
        <Text style={styles.timeDescription} >
          { i18n.t("time_description") }
        </Text>
        <WaitInfo 
          qType={0}
          pType={0}
          start={Date.now() + 1000 * 60 * 12 + 1000 * 32}
        />
      </LinearGradient>
    )
  }
}
