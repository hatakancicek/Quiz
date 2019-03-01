import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { scale } from 'react-native-size-matters';
import { TouchableOpacity, StyleSheet, } from 'react-native';

const styles = StyleSheet.create({
  root: {
    borderRadius: 40,
    alignSelf: 'stretch',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: scale(8),
    paddingHorizontal: scale(12),
  },
});

export class ColButton extends Component {
  static propTypes = {
    disabled: PropTypes.bool,
    onPress: PropTypes.func,
    color: PropTypes.string.isRequired,
    style: PropTypes.object,
  };

  render() {
    const { disabled, onPress, color, children, style } = this.props;

    return (
      <TouchableOpacity 
        style={{
          ... !!style && style,
          ...styles.root,
          backgroundColor: color,
          opacity: disabled ? .8 : 1,
        }} 
        onPress={onPress}
        disabled={disabled}
      >
        { children }
      </TouchableOpacity>
    );
  };
};

export default ColButton;
