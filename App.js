import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';

import LogoTitle from './components/LogoTitle.js';
import Principal from './telas/Principal.js';
import Planta from './telas/Planta.js';
import Camera from './telas/Camera.js';
import Programar from './telas/Programar.js';


const RootStack = createStackNavigator(
  {
    Home: Planta,
    Details: Principal,
    Stream: Camera,
    Automatize: Programar,
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
