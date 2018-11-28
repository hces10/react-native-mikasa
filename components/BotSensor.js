import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';


export default class BotSensor extends Component {

	render() {
		return (
			<View style={styles.fundo}>	

			<View style={styles.fundoComponente}>
				<View style={styles.nomeSensor}>
						
						<Text>COLOCAR NOME DO SENSOR
						</Text>
					
				</View>
				<View style={styles.dataHora}>
					<Text>COLOCAR NOME DO SENSOR
						</Text>
				</View>

			</View>	
			</View>
		);
	}
}

const styles = StyleSheet.create({
	fundo: {
		flex: 3// nao consigo usar flex e flexdirection no view total
	},	
	fundoComponente: {
		flex: 1,
		flexDirection: 'column'

	},
	dataHora: {
		backgroundColor: 'lightgrey',
		flex: 1,
		borderRadius: 20,
		
		borderWidth: 3,
		borderColor: 'grey',
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 2,
		marginRight: 4,
		marginTop: 2,
		marginBottom: 3

	},
	nomeSensor: {
		backgroundColor: 'lightgrey',
		
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 20,
		flex: 1,
		borderWidth: 3,
		borderColor: 'grey',
		marginLeft: 4,
		marginRight: 2,
		marginTop: 5
	}
});

