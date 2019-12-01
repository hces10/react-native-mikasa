import React, { Component } from 'react';
import { View } from 'react-native';

import TopoAuto from '../components/TopoAuto.js'; 
import Regras from '../components/Regras.js'; 

export default class Programar extends Component {
  render() {
    return (
      <View>
        <TopoAuto name={this.props.navigation.state.params.name} />
        <Regras />
      </View>
    );
  }
}

