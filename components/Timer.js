import React, { Component } from 'react';
import { scale } from 'react-native-size-matters';
import { View, Text, StyleSheet, Animated, } from 'react-native';

const styles = StyleSheet.create({
  root: {
    width: scale(70),
    borderRadius: 50,
    height: scale(70),
    marginTop: scale(24),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#BBDEFB',
  },
  inner: {
    width: scale(60),
    borderRadius: 50,
    height: scale(60),
    position: 'absolute',
    backgroundColor: 'red',
  },
  text: {
    color: '#FFFFFF',
    fontSize: scale(28),
    fontFamily: 'Quicksand-Bold',
  },
});

export default class Timer extends Component {
  state = {
    color: new Animated.Value(0),
    mounted: true,
    count: 10,
  };

  updateTime = _ => {
    const { mounted, count, interval } = this.state;
    if(!mounted)
      return;

    const _count = Math.max(count - 1, 0);

    if(_count === 0 && interval){
      clearInterval(interval);

      this.setState({
        interval: null,
        mounted: false,
        count: _count,
      });
    } else {
      this.setState({
        count: count - 1,
      });
    };
  };

  componentWillMount() {
    const interval = setInterval(this.updateTime, 1000);

    const { color } = this.state;

    Animated.timing(color, {
      toValue: 1,
      duration: 10 * 1000,
    }).start();

    this.setState({ interval });
  };

  componentWillUnmount() {
    const { interval } = this.state;

    if(interval)
      clearInterval(interval);

    this.setState({
      interval: null,
      mounted: false,
    });
  };

  render() {
    const { color, count } = this.state;
    
    const _color = color.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: ["#00c853", "#00bcd4", "#ff1744"],
    });

    return (
      <View style={styles.root} >
        <Animated.View 
          style={{
            ...styles.inner,
            backgroundColor: _color,
          }} 
        />
        <Text style={styles.text} >
          { count }
        </Text>
      </View>
    );
  };
};
