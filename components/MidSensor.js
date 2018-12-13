import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';


export default class MidSensor extends Component {

	render() {
		return (
			<View style={styles.fundo}>	

			<View style={styles.fundoComponente}>
				<View style={styles.saida}>
						<View style={styles.viewNomeSensor}>
							<Text style={styles.textoMid}>JANELA</Text>
						</View>
						
						<View style={styles.viewEstado}>
							<Image source={require('../img/IconeRed.jpg')} style={{ width: 200, height: 100 }} />
						</View>
					
				</View>
				

			</View>	
			</View>
		);
	}
}

const styles = StyleSheet.create({
	fundo: {
		flex: 5 // nao consigo usar flex e flexdirection no view total
	},	
	fundoComponente: {
		flex: 1,
		flexDirection: 'row'
	},
	saida: {
		backgroundColor: 'lightgrey',
		
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 20,
		borderWidth: 3,
		flex: 1,
		borderColor: 'grey',
		marginTop: 2,
		marginLeft: 4,
		marginRight: 4
	},
	viewNomeSensor: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1
	},
	viewEstado: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1
	},
	textoMid: {
		fontSize: 50,
		color: 'blue',
		fontWeight: 'bold',
		textAlign: 'center',
		fontFamily: 'sans-serif'
    }
});

