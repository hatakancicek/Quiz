import { 
  View, 
} from 'react-native';
import React, { Component } from 'react';
import { scale } from 'react-native-size-matters';

import User from '../assets/icons/user.svg';
import { AppName, headerHeight } from '../Config';
import HeaderIcon from '../components/HeaderIcon';
import Calendar from '../assets/icons/calendar.svg';

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
      <View>
        
      </View>
    );
  };
};
