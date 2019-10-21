/* eslint-disable global-require */
import React, { Component } from 'react';
import { Image, View } from 'react-native';

export default class LogoTitle extends Component {
  render() {
    return (
      <View style={{ alignItems: 'flex-end', flex: 1 }}>
        <Image source={require('../img/logo.jpg')} style={{ width: 150, height: '100%' }} />
      </View>
    );
  }
}
