import i18n from 'i18n-js';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import SvgUri from 'react-native-svg-uri';
import { Localization } from 'expo-localization';
import { scale } from 'react-native-size-matters';
import { Text, View, StyleSheet, } from 'react-native';

import ColButton from './ColButton';
import { qTypes, pTypes } from '../Config';
import coin from '../assets/icons/coin.svg';
import crown from '../assets/icons/crown.svg';
import noCrown from '../assets/icons/no_crown.svg';

const styles = StyleSheet.create({
  root: {
    elevation: 1,
    shadowRadius: 2,
    borderRadius: 12,
    shadowOpacity: 0.4,
    flexWrap: 'nowrap',
    alignSelf: 'stretch',
    marginTop: scale(10),
    flexDirection: 'row',
    shadowColor: '#37474F',
    paddingVertical: scale(12),
    backgroundColor: '#FFFFFF',
    marginHorizontal: scale(10),
    shadowOffset: { width: 0, height: 2 },
  },
  left: {
    alignSelf: 'stretch',
    alignItems: 'center',
    flexDirection: 'column',
    paddingVertical: scale(12),
    justifyContent: 'flex-end',
    paddingHorizontal: scale(22),
  },
  middle: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingVertical: scale(12),
  },
  right: {
    alignSelf: 'stretch',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingVertical: scale(12),
    paddingHorizontal: scale(10),
    paddingHorizontal: scale(22),
  },
  day: {
    color: '#546E7A',
    fontSize: scale(16),
    marginTop: scale(4),
    fontFamily: 'Quicksand',
  },
  hour: {
    color: '#546E7A',
    fontSize: scale(16),
    marginTop: scale(2),
    fontFamily: 'Quicksand',
  },
  button: {
    marginTop: scale(8),
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: scale(14),
    fontFamily: 'Quicksand-Bold',
  },
  qText: {
    color: '#37474F',
    fontSize: scale(28),
    textAlign: 'center',
    minWidth: scale(105),
    fontFamily: 'Quicksand-Bold',
  },
  line: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  countText: {
    color: '#37474F',
    fontSize: scale(22),
    marginRight: scale(2),
    fontFamily: 'Quicksand-Bold',
  },
  qText: {
    color: '#37474F',
    fontSize: scale(28),
    textAlign: 'center',
    fontFamily: 'Quicksand-Bold',
  },
});

export default class QuestHistory extends Component {
  static propTypes = {
    qType: PropTypes.number.isRequired,
    pType: PropTypes.number.isRequired,
    start: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
    pEarned: PropTypes.number.isRequired,
  };

  render() {
    const { qType, pType, start, index, pEarned } = this.props;

    const q = qTypes[qType];
    const p = pTypes[pType];

    const sDate = (new Date(start));

    const date = sDate.toLocaleDateString();
    const hour = sDate.toLocaleTimeString(
        Localization.locale, 
        { hour: "2-digit", minute: "2-digit"}
      );

    const _crown = index === 13
      ? crown
      : noCrown;
    
    const qText = i18n.t("question_index", { index: index, }) + ".";

    return (
      <View style={styles.root} >
        <View style={styles.left} >
          <SvgUri
            width={scale(40)}
            height={scale(40)}
            source={q.image}
          />
          <Text style={styles.day} >
            { date }
          </Text>
          <Text style={styles.hour} >
            { hour }
          </Text>
        </View>
        <View style={styles.middle} >
          <Text style={styles.qText} >
            { qText }
          </Text>
          <ColButton
            style={styles.button}
            color={p.color}
          >
            <Text style={styles.buttonText} >
              { i18n.t(p.name) }
            </Text>
          </ColButton>
        </View>
        <View style={styles.right} >
          <View style={styles.line} >
            <Text style={styles.countText} >
              { pEarned }
            </Text>
            <SvgUri
              width={scale(18)}
              height={scale(18)}
              source={coin}
            />
          </View>
          <SvgUri
            width={scale(40)}
            height={scale(40)}
            source={_crown}
          />
        </View>
      </View>
    );
  };
};
