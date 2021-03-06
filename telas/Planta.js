/* eslint-disable global-require */
/* eslint-disable max-len */
import React, { Component } from 'react';
import { ImageBackground, View, TouchableOpacity, Image } from 'react-native';


export default class Planta extends Component {
  state = { LED: '', name: '' }

  onClick = (LED, name) => this.setState({ LED, name }, () => this.props.navigation.navigate('Details', this.state));

  render() {
    return (
      <ImageBackground source={require('../img/plantabai.jpg')} style={{ width: '100%', height: '100%', flex: 1 }}>
        <View nativeID='OffTop' style={{ flex: 1 }} />
        <View nativeID='InHouse' style={{ flex: 12.2, flexDirection: 'row' }}>
          <View nativeID='OffLeft' style={{ flex: 1 }} />
          <View nativeID='InnColunas' style={{ flex: 18, flexDirection: 'row' }}>
            <View nativeID='InnColCozinha' style={{ flex: 3 }}>
              <View nativeID='InnCozinha' style={{ flex: 4, opacity: 0.3 }} />
              <View nativeID='InnSala' style={{ flex: 5.8, opacity: 0.5 }}>
                <View nativeID='ArSaida' style={{ alignItems: 'flex-end', justifyContent: 'center', flex: 1, paddingLeft: 10 }}>
                  <TouchableOpacity style={{ width: 35 }}>
                    <Image source={require('../img/IconAr.jpg')} style={{ width: 35, height: 30 }} />
                  </TouchableOpacity>
                </View>
              </View>
              <View nativeID='InnArea' style={{ flex: 2.2, opacity: 0.8 }} />
            </View>
            <View nativeID='InnColCorredor' style={{ flex: 1.2 }}>
              <View nativeID='InnQuarto1' style={{ flex: 3, opacity: 0.3 }} />
              <View nativeID='InnCorredor' style={{ flex: 5.1, opacity: 0.5 }} />
              <View nativeID='InnQuarto3' style={{ flex: 3.9, opacity: 0.8 }} />
            </View>
            <View nativeID='InnColQuarto' style={{ flex: 2.8 }}>
              <View nativeID='InnQuarto1' style={{ flex: 3 }}>
                <View nativeID='JanelaSaida' style={{ alignItems: 'flex-end', justifyContent: 'center', flex: 1, paddingTop: 10 }}>
                  <TouchableOpacity style={{ width: 35 }} onPress={() => this.onClick('1', 'Janela Quarto 1')}>
                    <Image source={require('../img/iconJanela.jpg')} style={{ width: 35, height: 30 }} />
                  </TouchableOpacity>
                </View>
              </View>
              <View nativeID='InnQuarto2' style={{ flex: 3.7 }}>
                <View nativeID='JanelaSaida' style={{ alignItems: 'flex-end', justifyContent: 'center', flex: 1, paddingTop: 10 }}>
                  <TouchableOpacity style={{ width: 35 }} onPress={() => this.onClick('2', 'Janela Quarto 2')}>
                    <Image source={require('../img/iconJanela.jpg')} style={{ width: 35, height: 30 }} />
                  </TouchableOpacity>
                </View>
              </View>
              <View nativeID='InnBanheiro' style={{ flex: 2.1 }} />
              <View nativeID='InnQuarto3' style={{ flex: 3.2, flexDirection: 'row' }}>
                <View nativeID='JanelaSaida' style={{ alignItems: 'flex-start', justifyContent: 'flex-end', flex: 1, marginStart: 20 }}>
                  <TouchableOpacity style={{ width: 35 }} onPress={() => this.onClick('3', 'Janela Quarto 3')}>
                    <Image source={require('../img/iconJanela.jpg')} style={{ width: 35, height: 30 }} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View nativeID='OffRight' style={{ flex: 1 }} />
        </View>
        <View nativeID='OffBot' style={{ flex: 0.8 }} />
      </ImageBackground>
    );
  }
}
