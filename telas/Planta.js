/* eslint-disable global-require */
/* eslint-disable max-len */
import React, { Component } from 'react';
import { ImageBackground, View, TouchableOpacity, Image } from 'react-native';


export default class Planta extends Component {


  render() {
    return (
      <ImageBackground source={require('../img/plantabai.jpg')} style={{ width: '100%', height: '100%', flex: 1 }}>
        <View nativeID='OffTop' style={{ flex: 1, backgroundColor: '' }} />
        <View nativeID='InHouse' style={{ flex: 12.2, flexDirection: 'row' }}>
          <View nativeID='OffLeft' style={{ flex: 1, backgroundColor: '' }} />
          <View nativeID='InnColunas' style={{ flex: 18, flexDirection: 'row' }}>
            <View nativeID='InnColCozinha' style={{ flex: 3 }}>
              <View nativeID='InnCozinha' style={{ flex: 4, backgroundColor: '', opacity: 0.3 }} />
              <View nativeID='InnSala' style={{ flex: 5.8, backgroundColor: '', opacity: 0.5 }}>
                <View nativeID='ArSaida' style={{ alignItems: 'flex-end', justifyContent: 'center', flex: 1, paddingLeft: 10 }}>
                  <TouchableOpacity style={{ width: 35 }} onPress={() => this.props.navigation.navigate('Details')}>
                    <Image source={require('../img/IconAr.jpg')} style={{ width: 35, height: 30 }} />
                  </TouchableOpacity>
                </View>
              </View>
              <View nativeID='InnArea' style={{ flex: 2.2, backgroundColor: '', opacity: 0.8 }} />
            </View>
            <View nativeID='InnColCorredor' style={{ flex: 1.2 }}>
              <View nativeID='InnQuarto1' style={{ flex: 3, backgroundColor: '', opacity: 0.3 }} />
              <View nativeID='InnCorredor' style={{ flex: 5.1, backgroundColor: '', opacity: 0.5 }} />
              <View nativeID='InnQuarto3' style={{ flex: 3.9, backgroundColor: '', opacity: 0.8 }} />
            </View>
            <View nativeID='InnColQuarto' style={{ flex: 2.8 }}>
              <View nativeID='InnQuarto1' style={{ flex: 3 }}>
                <View nativeID='JanelaSaida' style={{ alignItems: 'flex-end', justifyContent: 'center', flex: 1, paddingTop: 10 }}>
                  <TouchableOpacity style={{ width: 35 }} onPress={() => this.props.navigation.navigate('Details')}>
                    <Image source={require('../img/iconJanela.jpg')} style={{ width: 35, height: 30 }} />
                  </TouchableOpacity>
                </View>
              </View>
              <View nativeID='InnQuarto2' style={{ flex: 3.7 }}>
                <View nativeID='JanelaSaida' style={{ alignItems: 'flex-end', justifyContent: 'center', flex: 1, paddingTop: 10 }}>
                  <TouchableOpacity style={{ width: 35 }} onPress={() => this.props.navigation.navigate('Details')}>
                    <Image source={require('../img/iconJanela.jpg')} style={{ width: 35, height: 30 }} />
                  </TouchableOpacity>
                </View>
              </View>
              <View nativeID='InnBanheiro' style={{ flex: 2.1, backgroundColor: '' }} />
              <View nativeID='InnQuarto3' style={{ flex: 3.2, flexDirection: 'row' }}>
                <View nativeID='JanelaSaida' style={{ alignItems: 'flex-end', justifyContent: 'flex-end', flex: 1 }}>
                  <TouchableOpacity style={{ width: 35 }} onPress={() => this.props.navigation.navigate('Details')}>
                    <Image source={require('../img/iconJanela.jpg')} style={{ width: 35, height: 30 }} />
                  </TouchableOpacity>
                </View>
                <View nativeID='CameraSaida' style={{ alignItems: 'flex-end', justifyContent: 'flex-end', flex: 1, paddingLeft: 15 }}>
                  <TouchableOpacity style={{ width: 35 }} onPress={() => this.props.navigation.navigate('Camera')}>
                    <Image source={require('../img/iconCamera.png')} style={{ width: 35, height: 30 }} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View nativeID='OffRight' style={{ flex: 1, backgroundColor: '' }} />
        </View>
        <View nativeID='OffBot' style={{ flex: 0.8, backgroundColor: '' }} />
      </ImageBackground>
    );
  }
}
