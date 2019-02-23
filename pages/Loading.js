import { 
  View, 
  Image, 
  StyleSheet,
  Dimensions,
  ActivityIndicator, 
} from 'react-native';
import { Font } from 'expo';
import React, { Component } from 'react';

import { colors } from '../Config.js';
import splash from '../assets/splash.png';

const { background, primary } = colors;
const { height, width } = Dimensions.get('window');

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
  state = {
    loadedFonts: false,
  };

  loadFonts = async _ => {
    await Font.loadAsync({
      'Quicksand-Bold': require('../assets/fonts/Quicksand-Bold.ttf'),
      'Quicksand-Light': require('../assets/fonts/Quicksand-Light.ttf'),
      'Quicksand-Medium': require('../assets/fonts/Quicksand-Medium.ttf'),
      'Quicksand': require('../assets/fonts/Quicksand-Regular.ttf'),
    });

    this.setState({
      loadedFonts: true,
    });

    this.props.navigation.navigate("Error");
  };

  componentDidMount() {
    const { loadFonts } = this;

    loadFonts();
  };

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
    );
  };
};
