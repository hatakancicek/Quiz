import i18n from 'i18n-js';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import SvgUri from 'react-native-svg-uri';
import { Localization } from 'expo-localization';
import { scale } from 'react-native-size-matters';
import { Text, View, StyleSheet, } from 'react-native';

import TimeText from './TimeText';
import ColButton from './ColButton';
import { qTypes, pTypes } from '../Config';

const styles = StyleSheet.create({
  root: {
    elevation: 1,
    shadowRadius: 2,
    shadowOpacity: 0.4,
    flexWrap: 'nowrap',
    alignSelf: 'stretch',
    marginTop: scale(10),
    flexDirection: 'row',
    shadowColor: '#37474F',
    paddingVertical: scale(12),
    backgroundColor: '#FFFFFF',
    shadowOffset: { width: 0, height: 2 },
  },
  left: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    flexDirection: 'column',
    paddingVertical: scale(12),
    justifyContent: 'flex-end',
  },
  middle: {
    alignSelf: 'stretch',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    paddingVertical: scale(12),
  },
  right: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    paddingVertical: scale(12),
    paddingHorizontal: scale(10),
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
  shareButton: {
    borderWidth: .5,
    marginTop: scale(8),
    borderColor: '#b0bec5',
  },
  shareText: {
    color: '#37474F',
    fontSize: scale(14),
    fontFamily: 'Quicksand-Bold',
  },
});

export default class Quest extends Component {
  static propTypes = {
    qType: PropTypes.number.isRequired,
    pType: PropTypes.number.isRequired,
    start: PropTypes.number.isRequired,
  };

  render() {
    const { qType, pType, start } = this.props;

    const q = qTypes[qType];
    const p = pTypes[pType];

    const sDate = (new Date(start));
    const tDate = (new Date())

    const isToday = (tDate.toDateString() === sDate.toDateString());
    const date = sDate.toLocaleTimeString(Localization.locale, { weekday: "long", hour: "2-digit", minute: "2-digit"});

    const [day, hour] = date.split(' ');
    const _day = isToday ? i18n.t("today") : day;

    const isRemind = Date.now() + 1000 * 60 * 15 < start;
    const secBut = isRemind 
      ? { title: "remind", color: "#FF9800" }
      : { title: "join", color: "#4CAF50" }
    
    return (
      <View style={styles.root} >
        <View style={styles.left} >
          <SvgUri
            width={scale(40)}
            height={scale(40)}
            source={q.image}
          />
          <Text style={styles.day} >
            { _day }
          </Text>
          <Text style={styles.hour} >
            { hour }
          </Text>
        </View>
        <View style={styles.middle} >
          <TimeText target={start} />
          <ColButton
            style={styles.button}
            color={p.color}
          >
            <Text style={styles.buttonText} >
              {i18n.t(p.name)}
            </Text>
          </ColButton>
        </View>
        <View style={styles.right} >
          <ColButton
            style={styles.shareButton}
            color="#FFFFFF"
          >
            <Text style={styles.shareText} >
              {i18n.t("share")}
            </Text>
          </ColButton>
          <ColButton
            style={styles.button}
            color={secBut.color}
          >
            <Text style={styles.buttonText} >
              {i18n.t(secBut.title)}
            </Text>
          </ColButton>
        </View>
      </View>
    );
  };
};
