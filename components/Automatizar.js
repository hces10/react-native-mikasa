import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

export default class Automatizar extends Component {
  constructor(props) {
    super(props);
    this.state = { name: this.props.name };
  }
  
	render() {
		return (
			<View style={styles.fundo}>	
        
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Automatize', this.state)}
          style={styles.botao}
        >
          <Text style={styles.textoBotao}>Automatizar</Text>
        </TouchableOpacity>
			</View>
		);
	}
}


const styles = StyleSheet.create({
	fundo: {
		flex: 1.2// nao consigo usar flex e flexdirection no view total
	},	
	fundoComponente: {
		flex: 1
  },
  botao: {
    flex: 1,
    borderRadius: 15,
    backgroundColor: '#538530',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    margin: 5
  },
  textoBotao: {
    fontSize: 25,
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center'
  }
	
});

