import i18n from 'i18n-js';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import SvgUri from 'react-native-svg-uri';
import { scale } from 'react-native-size-matters';
import { Text, View, StyleSheet, } from 'react-native';

import coin from '../assets/icons/coin.svg';
import crown from '../assets/icons/crown.svg';

const styles = StyleSheet.create({
  root: {
    marginTop: scale(4),
    alignItems: 'center',
    flexDirection: 'row',
  },
  qText: {
    color: '#37474F',
    fontSize: scale(22),
    fontFamily: 'Quicksand',
  },
  pText: {
    color: '#37474F',
    fontSize: scale(24),
    fontFamily: 'Quicksand-Bold',
  },
  coin: {
    marginLeft: scale(2),
  },
  crown: {
    marginTop: scale(-6),
    marginRight: scale(6),
  },
});

export default class RewardLine extends Component {
  static propTypes = {
    reward: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
  };

  render() {
    const { reward, index } = this.props;

    return (
      <View style={styles.root} >
      { index === 13 &&
        <SvgUri
          source={crown}
          width={scale(30)}
          height={scale(30)}
          style={styles.crown}
        />
      }
        <Text style={styles.qText} >
          { 
            i18n.t(
              "question_index", 
              {
                index: index === 13 ? "" : index + ".",
              }
            ) + ": " 
          }
          <Text style={styles.pText} >
            { reward }
          </Text>
        </Text>
        <SvgUri
          source={coin}
          width={scale(13)}
          height={scale(13)}
          style={styles.coin}
        />
      </View>
    );
  };
};
