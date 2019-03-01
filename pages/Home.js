import { 
  View, 
  StyleSheet,
  ScrollView,
} from 'react-native';
import React, { Component } from 'react';
import { scale } from 'react-native-size-matters';

import User from '../assets/icons/user.svg';
import Rewards from '../containers/Rewards';
import { AppName, headerHeight } from '../Config';
import HeaderIcon from '../components/HeaderIcon';
import Calendar from '../assets/icons/calendar.svg';

const styles = StyleSheet.create({
  root: {
    alignSelf: 'stretch',
    flex: 1,
    padding: scale(10),
  },
});

export default class Home extends Component {
  static navigationOptions = _ => ({
    title: AppName,
    headerStyle: {
      backgroundColor: '#FFFFFF',
      height: scale(headerHeight),
    },
    headerTitleStyle: {
      fontFamily: 'Quicksand-Bold',
      fontSize: scale(22),
    },
    headerLeft:
        <HeaderIcon
          source={Calendar}
        />,
    headerRight:
        <HeaderIcon
          source={User}
          right
        />
  });

  render() {
    return (
      <ScrollView style={styles.root} >
        <Rewards />
      </ScrollView>
    );
  };
};
