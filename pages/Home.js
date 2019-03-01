import { 
  View,
  FlatList, 
  StyleSheet,
  ScrollView,
} from 'react-native';
import React, { Component } from 'react';
import { scale } from 'react-native-size-matters';

import User from '../assets/icons/user.svg';
import Rewards from '../containers/Rewards';
import { AppName, headerHeight } from '../Config';
import HeaderIcon from '../components/HeaderIcon';
import Quest from '../components/Quest';
import Calendar from '../assets/icons/calendar.svg';
import mockQuests from '../mocks/Quests';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#eeeeee',
  },
  footer: {
    height: scale(10),
    alignSelf: 'stretch',
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

  renderQuest = ({item}) => 
    <Quest  
      { ...item }
    />;

  render() {
    const { renderQuest } = this;

    return (
      <View style={styles.root} >
        <FlatList 
          data={mockQuests}
          renderItem={ renderQuest } 
          ListHeaderComponent={<Rewards />}
          ListFooterComponent={<View style={styles.footer} ></View>}
        />
      </View>
    );
  };
};
