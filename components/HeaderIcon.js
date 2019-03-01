import PropTypes from 'prop-types';
import React, { Component } from 'react';
import SvgUri from 'react-native-svg-uri';
import { scale } from 'react-native-size-matters';
import { StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  leftIcon: {
    marginLeft: scale(10),
  },
  rightIcon: {
    marginRight: scale(10),
  },
});

export default class HeaderIcon extends Component {
  static propTypes = {
    source: PropTypes.number.isRequired,
    disabled: PropTypes.bool,
    onPress: PropTypes.func,
    right: PropTypes.bool,
  };

  render() {
    const {  
      right,
      source,
      onPress,
      disabled,
    } = this.props;

    const style = right 
      ? styles.rightIcon
      : styles.leftIcon;

    if(!onPress)
      return (
        <SvgUri
          style={style}
          source={source}
          width={scale(25)}
          height={scale(25)}
        />
      );

    return (
      <TouchableOpacity  
        style={style}
        onPress={onPress}
        disabled={disabled}
      >
        <SvgUri
          source={source}
          width={scale(25)}
          height={scale(25)}
        />
      </TouchableOpacity>
    );
  };
};
