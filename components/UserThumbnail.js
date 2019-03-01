import PropTypes from 'prop-types';
import React, { Component } from 'react';
import SvgUri from 'react-native-svg-uri';
import { scale } from 'react-native-size-matters';
import { View, Text, StyleSheet, Image } from 'react-native';

import coin from '../assets/icons/coin.svg';
import crown from '../assets/icons/crown.svg';

const styles = StyleSheet.create({
  root: {
    marginTop: scale(30),
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageWrapper: {
    elevation: 1,
    shadowRadius: 4,
    width: scale(60),
    height: scale(60),
    shadowOpacity: 0.9,
    shadowColor: '#37474F',
    borderRadius: scale(30),
    shadowOffset: { width: 0, height: 2 },
  },
  image: {
    width: scale(60),
    height: scale(60),
    borderRadius: scale(30),
  },
  userWrapper: {
    flexDirection: 'column',
    marginLeft: scale(12),
  },
  username: {
    color: '#FFFFFF',
    fontSize: scale(20),
    fontFamily: 'Quicksand',
  },
  userCoinWrapper: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
  },
  coinText: {
    color: '#FFFFFF',
    fontSize: scale(22),
    fontFamily: 'Quicksand-Bold',
  },
  coin: {
    marginLeft: scale(4),
  },
});

export default class UserThumbnail extends Component {
  static propTpes = {
    image: PropTypes.number.isRequired,
    coins: PropTypes.number.isRequired,
    crowns: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
  };

  render() {
    const { image, coins, crowns, username } = this.props;

    return (
      <View style={styles.root} >
        <View style={styles.imageWrapper} >
          <Image
            source={image}
            style={styles.image}
          />
        </View>
        <View style={styles.userWrapper} >
          <Text style={styles.username} >
            {username}
          </Text>
          <View style={styles.userCoinWrapper} >
            <Text style={styles.coinText} >
              {coins}
            </Text>
            <SvgUri
              source={coin}
              width={scale(16)}
              height={scale(16)}
              style={styles.coin}
            />
          </View>
          <View style={styles.userCoinWrapper} >
            <Text style={styles.coinText} >
              {crowns}
            </Text>
            <SvgUri
              source={crown}
              width={scale(18)}
              height={scale(18)}
              style={styles.coin}
            />
          </View>
        </View>
      </View>
    );
  };
};
