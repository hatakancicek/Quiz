import React, { Component } from 'react';
import { 
  View, 
  Image, 
  StyleSheet,
  Dimensions,
  ActivityIndicator, 
} from 'react-native';

import { colors } from '../Config.js';

const { background, primary } = colors;
const {height, width} = Dimensions.get('window');

const splash = require('../assets/splash.png');

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: background,
},
  image: {
    width,
    height,
    resizeMode: 'contain',
  },
  indicator: {
    bottom: 20,
    alignSelf: 'center',
    position: 'absolute',
  },
});

export default class Loading extends Component {
  render() {
    return (
      <View style={styles.root} >
        <Image 
          style={styles.image}
          source={splash}
        />
        <ActivityIndicator 
          size="large" 
          color={primary} 
          style={styles.indicator} 
        />
      </View>
    )
  }
}
