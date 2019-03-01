import i18n from 'i18n-js';
import React, { Component } from 'react';
import { scale } from 'react-native-size-matters';
import { Text, View, StyleSheet } from 'react-native';

import { colors } from '../Config';
import Reward from '../components/Reward';
import mockRewards from '../mocks/Rewards';

const { blue } = colors;

const styles = StyleSheet.create({
  root: {
    elevation: 1,
    shadowRadius: 2,
    shadowOpacity: 0.8,
    alignSelf: 'stretch',
    shadowColor: '#37474F',
    flexDirection: 'column',
    shadowOffset: { width: 0, height: 2 },
  },
  header: {
    padding: scale(12),
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: blue,
    justifyContent: 'space-between',
  },
  title: {
    color: '#FFFFFF',
    fontSize: scale(16),
    fontFamily: 'Quicksand-Bold',
  },
  seeWrapper: {
    borderWidth: 1,
    borderRadius: 40,
    borderColor: '#CFD8DC',
    paddingVertical: scale(8),
    paddingHorizontal: scale(12),
  },
  seeText: {
    color: '#FFFFFF',
    fontSize: scale(12),
    fontFamily: 'Quicksand-Bold',
  },
  body: {
    padding: scale(12),
    alignSelf: 'stretch',
    flexDirection: 'row',
    backgroundColor: "#FFFFFF",
  },
});

export default class Rewards extends Component {
  render() {
    return (
      <View style={styles.root} >
        <View style={styles.header} >
          <Text style={styles.title} >
            {i18n.t("rewards_title")}
          </Text>
          <View style={styles.seeWrapper} >
            <Text style={styles.seeText} >
              {i18n.t("see_all")}
            </Text>
          </View>
        </View>
        <View style={styles.body} >
          {
            mockRewards.map(({ price, image, name }, index) =>
              <Reward
                key={index}
                name={name}
                price={price}
                image={image}
              />
            )
          }
        </View>
      </View>
    )
  }
}
