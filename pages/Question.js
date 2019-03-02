import i18n from 'i18n-js';
import { LinearGradient } from 'expo';
import React, { Component } from 'react';
import { scale } from 'react-native-size-matters';
import { Text, View, StyleSheet, } from 'react-native';

import Timer from '../components/Timer';
import { AppName, headerHeight } from '../Config';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    borderRadius: 24,
    margin: scale(30),
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: scale(30),
    paddingHorizontal: scale(24),
  },
  text: {
    color: '#37474F',
    fontSize: scale(22),
    textAlign: 'center',
    marginBottom: scale(12),
    fontFamily: 'Quicksand-Bold',
  },
  line: {
    borderWidth: 1,
    borderRadius: 40,
    alignSelf: 'stretch',
    marginTop: scale(12),
    borderColor: '#90a4ae',
    paddingVertical: scale(12),
    paddingHorizontal: scale(18),
  },
  lineText: {
    color: '#37474F',
    fontSize: scale(18),
    fontFamily: 'Quicksand-Medium',
  },
});

export default class Question extends Component {
  static navigationOptions = {
    title: AppName,
    headerStyle: {
      backgroundColor: '#FFFFFF',
      height: scale(headerHeight),
    },
    headerTitleStyle: {
      fontFamily: 'Quicksand-Bold',
      fontSize: scale(22),
    },
    header: null,
    gesturesEnabled: false,
  };

  render() {
    return (
      <LinearGradient 
        colors={[ "#2196F3", "#0D47A1" ]} 
        style={ styles.root } 
      >
        <View style={styles.wrapper} >
          <Text style={ styles.text } >
            Türkiyenin en uzun nehri aşağıdakilerden hangisidir?
          </Text>
          <View style={styles.line} >
            <Text style={styles.lineText} >
              Nil Nehri
            </Text>
          </View>
          <View style={styles.line} >
            <Text style={styles.lineText} >
              Asi Nehri
            </Text>
          </View>
          <View style={styles.line} >
            <Text style={styles.lineText} >
              Seyhan Nehri
            </Text>
          </View>
          <Timer />
        </View>
      </LinearGradient>
    );
  };
};
