import { 
  View, 
  FlatList,
  StyleSheet, 
} from 'react-native';
import i18n from 'i18n-js';
import React, { Component } from 'react';
import { scale } from 'react-native-size-matters';

import mockUser from '../mocks/User';
import { headerHeight } from '../Config';
import mockHistory from '../mocks/History';
import QuestHistory from '../components/QuestHistory';
import UserThumbnail from '../components/UserThumbnail';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#eeeeee',
  },
  userWrapper: {
    elevation: 1,
    shadowRadius: 2,
    borderRadius: 12,
    padding: scale(22),
    shadowOpacity: 0.4,
    marginTop: scale(10),
    shadowColor: '#37474F',
    backgroundColor: '#2196F3',
    marginHorizontal: scale(10),
    shadowOffset: { width: 0, height: 2 },
  },
  footer: {
    height: scale(10),
    alignSelf: 'stretch',
  },
});

export default class Profile extends Component {
  static navigationOptions = _ => ({
    headerStyle: {
      backgroundColor: '#FFFFFF',
      height: scale(headerHeight),
    },
    headerTitleStyle: {
      fontFamily: 'Quicksand-Bold',
      fontSize: scale(22),
    },
    title: i18n.t("profile"),
  });

  renderHistory = ({ item }) =>
    <QuestHistory { ...item } />;

  renderHeader = _ =>
    <View style={styles.userWrapper} >
      <UserThumbnail { ...mockUser } />
    </View>;

  render() {
    const { 
      renderHeader,
      renderHistory,
    } = this;

    return (
      <View style={styles.root} >
        <FlatList
          data={mockHistory}
          renderItem={renderHistory}
          ListHeaderComponent={renderHeader}
          ListFooterComponent={<View style={styles.footer} ></View>}
        />
      </View>
    );
  };
};
