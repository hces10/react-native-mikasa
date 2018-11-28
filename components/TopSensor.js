import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';


export default class TopSensor extends Component {

	render() {
		return (
			<View style={styles.fundo}>	

			<View style={styles.fundoComponente}>
				<View style={styles.nomeSensor}>
						
						<Text>COLOCAR NOME DO SENSOR
						</Text>
					
				</View>
				<View style={styles.dataHora}>
					<Text>COLOCAR DATA E HORA
						</Text>
				</View>

			</View>	
			</View>
		);
	}
}

const styles = StyleSheet.create({
	fundo: {
		flex: 1.5// nao consigo usar flex e flexdirection no view total
	},	
	fundoComponente: {
		flex: 1,
		flexDirection: 'row',
		marginTop: 5
	},
	dataHora: {
		backgroundColor: 'lightgrey',
		flex: 7,
		borderRadius: 20,
		
		borderWidth: 3,
		borderColor: 'grey',
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 2,
		marginRight: 4
	},
	nomeSensor: {
		backgroundColor: 'lightgrey',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 20,
		flex: 3,
		borderWidth: 3,
		borderColor: 'grey',
		marginLeft: 4,
		marginRight: 2
	}
});

