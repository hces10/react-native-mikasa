import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';


export default class TopSensor extends Component {
  constructor(props) {
    super(props);
    this.state = { date: '' };
  }

  componentDidMount() {
    var that = this;
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    var hours = new Date().getHours();
    var min = new Date().getMinutes();
    that.setState({ date: date + '/' + month + '/' + year + '  ' + hours + ':' + min });
  }

	render() {
		return (
			<View style={styles.fundo}>	
        <View style={styles.fundoComponente}>
          <View style={styles.nomeSensor}>
            <Text style={styles.textoTop}>{this.props.name}</Text>
          </View>
          <View style={styles.dataHora}>
            <Text style={styles.textoHora}>{this.state.date}</Text>
          </View>
        </View>	
			</View>
		);
	}
}

const styles = StyleSheet.create({
	fundo: {
		flex: 1.5
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
	},
  textoTop: {
		fontSize: 15,
		color: 'blue',
		fontWeight: 'bold',
		textAlign: 'center'
  },
  textoHora: {
		fontSize: 15,
		textAlign: 'center',
  },
});

