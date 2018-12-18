import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import ModalTester from './ModalAutomatizar.js';

export default class Automatizar extends Component {
	render() {
		return (
			<View style={styles.fundo}>	

				<View style={styles.fundoComponente}>
				
					<ModalTester />
				
				</View>	

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
	}
	
});

