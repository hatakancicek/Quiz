import React from 'react';
import i18n from 'i18n-js';
import { Localization } from 'expo-localization';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { firebaseConfig } from './Config';
import RootSwitch from './navigators/RootSwitch';
import { tr, en } from './languages';

firebase.initializeApp(firebaseConfig);

i18n.fallbacks = true;
i18n.translations = { en, tr };
i18n.locale = Localization.locale;

export default class App extends React.Component {
  render() {
    return (
      <RootSwitch />
    );
  };
};