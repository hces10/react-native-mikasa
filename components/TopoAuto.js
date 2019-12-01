import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

//tela após tocar no sensor
export default class TopoAuto extends Component {
  render() {
    return (
      <View style={{ height: 100 }}>       
        <View style={styles.fundo}>
          <Text style={styles.texto}>{this.props.name}</Text>
        </View>  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fundo: {
    flex: 1,
    borderWidth: 10,
    borderColor: 'blue',
    borderRadius: 5,
    justifyContent: 'center',
  },
  texto: {
		fontSize: 30,
		color: 'blue',
		fontWeight: 'bold',
		textAlign: 'center',
  },
});
