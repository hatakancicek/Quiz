import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { firebaseConfig } from './Config';
import RootSwitch from './navigators/RootSwitch';

firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {
  render() {
    return (
      <RootSwitch />
    );
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
