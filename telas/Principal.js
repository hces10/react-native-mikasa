import React, { Component } from 'react';
import { View } from 'react-native';


import TopSensor from '../components/TopSensor.js';
import Automatizar from '../components/Automatizar.js';
import MidSensor from '../components/MidSensor.js';
import BotSensor from '../components/BotSensor.js';

//tela após tocar no sensor
export default class Principal extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'blue' }}>
        <TopSensor />
        {console.log('state', this.props.navigation.state.params)}
        <Automatizar navigation={this.props.navigation} />
        <MidSensor LED={this.props.navigation.state.params.LED} />
        <BotSensor />
      </View>
    );
  }
}
