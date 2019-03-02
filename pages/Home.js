import { 
  View,
  FlatList, 
  StyleSheet,
  ScrollView,
} from 'react-native';
import React, { Component } from 'react';
import { scale } from 'react-native-size-matters';

import Quest from '../components/Quest';
import mockQuests from '../mocks/Quests';
import User from '../assets/icons/user.svg';
import Rewards from '../containers/Rewards';
import { AppName, headerHeight } from '../Config';
import HeaderIcon from '../components/HeaderIcon';
import Calendar from '../assets/icons/calendar.svg';

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
  static navigationOptions = ({ navigation: { navigate }}) => ({
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
          right
          source={User}
          onPress={_ => navigate("Profile")}
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
