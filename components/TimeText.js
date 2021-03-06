import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Text, StyleSheet, } from 'react-native';
import { scale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  text: {
    color: '#37474F',
    fontSize: scale(28),
    textAlign: 'center',
    minWidth: scale(105),
    fontFamily: 'Quicksand-Bold',
  },
});

export default class TimeText extends Component {
  state = {
    mounted: true,
  };

  static defaultProps = {
    showHours: true,
  };

  static propTypes = {
    target: PropTypes.number.isRequired,
    showHours: PropTypes.bool,
    style: PropTypes.object,
  };

  updateTime = _ => {
    const { target } = this.props;

    const now = Date.now();
    const remaining = Math.floor(Math.max(target - now, 0));
    
    this.setState({
      remaining,
    });
  };

  componentWillMount() {
    this.updateTime();

    const timer = setInterval(this.updateTime, 1000);

    this.setState({ timer });
  };

  componentWillUnmount() {
    this.setState({
      mounted: false,
    });

    const { timer } = this.state;

    clearInterval(timer);
  };

  render() {
    const { showHours, style } = this.props;
    const { remaining } = this.state || 0;

    let seconds = Math.floor((remaining % (60 * 1000)) / 1000);
    let minutes = Math.floor((remaining % (60 * 60 * 1000)) / ( 1000 * 60 ));
    let hours = Math.floor(remaining / ( 1000 * 60 * 60 ))

    seconds = ( seconds > 9 ? "" : "0" ) + seconds;
    minutes = ( minutes > 9 ? "" : "0" ) + minutes;
    hours = ( hours > 9 ? "" : "0" ) + hours;

    return (
      <Text style={{
        ...styles.text,
        ...style,
      }} >
        {`${showHours ? hours + ":" : ""}`}{minutes}:{seconds}
      </Text>
    );
  };
};
