import i18n from 'i18n-js';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import SvgUri from 'react-native-svg-uri';
import { scale } from 'react-native-size-matters';
import { Text, View, StyleSheet } from 'react-native';

import { qTypes } from '../Config';
import RewardLine from './RewardLine';

const styles = StyleSheet.create({
  root: {
    borderRadius: 24,
    alignSelf: 'stretch',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: scale(45),
    backgroundColor: '#FFFFFF',
    paddingHorizontal: scale(25),
    justifyContent: 'space-between',
  },
  left: {
    flexDirection: 'column',
  },
  right: {
    alignItems: 'flex-end',
    flexDirection: 'column',
  },
  name: {
    color: '#37474F',
    fontSize: scale(26),
    marginTop: scale(6),
    fontFamily: 'Quicksand-Bold',
  },
  divider: {
    height: 2,
    borderRadius: 2,
    marginTop: scale(4),
    alignSelf: 'stretch',
    backgroundColor: '#C4C4C4',
  }
});

export default class WaitInfo extends Component {
  static propTypes = {
    qType: PropTypes.number.isRequired,
    pType: PropTypes.number.isRequired,
    start: PropTypes.number.isRequired,
  };

  render() {
    const { qType } = this.props;

    const q = qTypes[qType];

    return (
      <View style={styles.root} >
        <View style={styles.left} >
          <SvgUri
            source={q.image}
            width={scale(50)}
            height={scale(50)}
          />
          <Text style={styles.name} >
            { i18n.t(q.name) }
          </Text>
        </View>
        <View style={styles.right} >
          <RewardLine reward={500} index={13} />
          <View style={styles.divider} />
          <RewardLine reward={200} index={12} />
          <RewardLine reward={100} index={9} />
        </View>
      </View>
    );
  };
};
