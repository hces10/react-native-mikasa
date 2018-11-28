import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';


import Principal from './telas/Principal.js';
import Planta from './telas/Planta.js';
import Camera from './telas/Camera.js';

class LogoTitle extends Component {
  render() {
    return (
      <View style={{ alignItems: 'flex-end', flex: 1 }}>
        <Image source={require('./img/logo.jpg')} style={{ width: 150, height: '100%' }} />
      </View>
    );
  }
}


const RootStack = createStackNavigator(
  {
    Home: Planta,
    Details: Principal,
    Stream: Camera
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerTitle: <LogoTitle />,
      headerStyle: {
        backgroundColor: 'blue'
      }
    }
  }
);

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}
