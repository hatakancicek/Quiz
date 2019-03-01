import PropTypes from 'prop-types';
import React, { Component } from 'react';
import SvgUri from 'react-native-svg-uri';
import { scale } from 'react-native-size-matters';
import { Text, View, StyleSheet, Image } from 'react-native';

import coin from '../assets/icons/coin.svg';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: scale(8),
    alignSelf: 'stretch',
    alignItems: 'center',
    flexDirection: 'column',
  },
  image: {
    width: scale(60),
    height: scale(60),
  },
  name: {
    color: "#37474F",
    fontSize: scale(16),
    marginTop: scale(8),
    fontFamily: "Quicksand-Bold",
  },
  priceWrapper: {
    marginTop: scale(6),
    alignSelf: 'stretch',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  price: {
    color: "#37474F",
    fontSize: scale(14),
    marginRight: scale(2),
    fontFamily: "Quicksand",
  },
});

export default class Rewards extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  };

  render() {
    const { image, price, name } = this.props;

    return (
      <View style={styles.root} >
        <Image
          source={image}
          style={styles.image}
          ImageResizeMode="cover"
        />
        <Text numberOfLines={1} style={styles.name} >
          {name}
        </Text>
        <View style={styles.priceWrapper} >
          <Text style={styles.price} >
            {price}
          </Text>
          <SvgUri
            width={scale(12)}
            height={scale(12)}
            source={coin}
          />
        </View>
      </View>
    );
  };
};
