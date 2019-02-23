import { 
  View, 
  Text,
  StyleSheet,
  TouchableOpacity, 
} from 'react-native';
import i18n from 'i18n-js';
import React, { Component } from 'react';
import { scale } from 'react-native-size-matters';

import { colors } from '../Config.js';

const { background, primary, secondary } = colors;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'stretch',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: background,
    paddingHorizontal: scale(24),
  },
  title: {
    color: primary,
    marginBottom: 0,
    fontSize: scale(40),
    lineHeight: scale(42),
    fontFamily: "Quicksand",
  },
  description: {
    color: "#FFFFFF",
    fontSize: scale(24),
    marginTop: scale(22),
    fontFamily: "Quicksand",
  },
  buttonWrapper: {
    padding: 24,
    elevation: 1,
    shadowRadius: 2,
    borderRadius: 8,
    shadowOpacity: 0.8,
    shadowColor: '#000',
    marginTop: scale(40),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: secondary,
    shadowOffset: { width: 0, height: 2 },
  },
  buttonOpacity: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: background,
    fontSize: scale(24),
    textShadowRadius: 10,
    fontFamily: "Quicksand-Bold",
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 0, height: 0},
  },
});

export default class Error extends Component {
  render() {
    return (
      <View style={styles.root} >
        <Text style={styles.title} >
          {i18n.t("err_page_title")}
        </Text>
        <Text style={styles.description} >
          {i18n.t("err_page_description")}
        </Text>
        <TouchableOpacity style={styles.buttonWrapper} >
          <Text style={styles.buttonText} >
            {i18n.t("retry")}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
};
