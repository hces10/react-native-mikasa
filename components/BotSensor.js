import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';


export default class BotSensor extends Component {

	render() {
		return (
			<View style={styles.fundo}>	
			<View style={styles.fundoComponente}>
				<View style={styles.nomeSensor}>
					<View style={{ alignItems: 'flex-start', flex: 7, paddingLeft: 20 }}>
						<Text style={styles.textoBot}>Sensor de Chuva</Text>
					</View>
					<View style={{ alignItems: 'center', flex: 3 }}>
						<Text style={{ fontSize: 30, color: 'yellow' }}>ON</Text>
					</View>
				</View>
				<View style={styles.dataHora}>
					<View style={{ alignItems: 'flex-start', flex: 7 }}>
						<Text style={styles.textoBot}>Sensor de Temperatura</Text>
					</View>
					<View style={{ alignItems: 'center', flex: 3 }}>
						<Text style={{ fontSize: 30, color: 'yellow' }}>30°C</Text>
					</View>
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
		marginBottom: 3,
		flexDirection: 'row'
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
		marginTop: 5,
		flexDirection: 'row'
	},
    textoBot: {
		fontSize: 25,
		color: '#FFF',
		fontWeight: 'bold',
		textAlign: 'center'
    }
});

