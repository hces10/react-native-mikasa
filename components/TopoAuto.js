import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

//tela após tocar no sensor
export default class TopoAuto extends Component {
  render() {
    return (
      <View style={{ height: 100 }}>
          
              <View style={styles.fundo}></View>
              
          
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fundo: {
        flex: 1, // nao consigo usar flex e flexdirection no view total
        borderWidth: 10,
        borderColor: 'cyan',
        borderRadius: 5
    }
});
