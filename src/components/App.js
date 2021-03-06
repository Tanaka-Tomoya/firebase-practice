import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import config from '../config/firebase-config';
import Header from './Header';
import BetterHeader from './BetterHeader';

class App extends Component {
  constructor() {
    super();
    firebase.initializeApp(config);
    // firebase.firestore().settings({
    //   timestamplsInSnapshots: true
    // });
  }

  render() {
    return <BetterHeader />;
  }
}

export default App;
