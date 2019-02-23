import React from 'react';

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