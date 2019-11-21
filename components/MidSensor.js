/* eslint-disable global-require */
/* eslint-disable no-confusing-arrow */
import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';


export default class MidSensor extends Component {
  state = { response: {}, state: true, isUp: [], LED: this.props.LED }

  componentWillMount() {
    this.getState();
  }

  getState = () => {
    const axios = require('axios');
    const { LED } = this.state;
    // Make a request for a user with a given ID
    axios.get('http://177.193.46.190:8082')
      .then((response) => {
        // handle success
        const isUp = response.data.split(',');
        if (
          (LED == '1' && isUp[0] == 'true')
          || (LED == '2' && isUp[1] == 'true')
          || (LED == '3' && isUp[2] == 'true')
        ) {
          this.setState({ state: true });
        } else {
          this.setState({ state: false });
        }
        this.setState({ response, isUp });
      })
      .catch((error) => {
        // handle error
        this.setState({ error });
        console.log(error);
      })
      .finally(() => {
        // always executed
	    });
  }

  handleToogle = () => {
    const { LED } = this.state;
    const axios = require('axios');
    if (this.state.state)
      return this.setState({ state: !this.state.state },
        () => axios.post(`http://177.193.46.190:8082/off${LED}`, {})
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        })
      );
    return this.setState({ state: !this.state.state }, () => axios.post(`http://177.193.46.190:8082/on${LED}`, {})
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      })
    );
  }
  

	render() {
		return (
			<View style={styles.fundo}>	
        <View style={styles.fundoComponente}>
          <View style={styles.saida}>
            <View style={styles.viewNomeSensor}>
              <Text style={styles.textoMid}>{this.state.response.data}</Text>
              <Text style={styles.textoMid}>{this.state.LED}</Text>
              <Text style={styles.textoMid}>{this.state.isUp[0]}</Text>
              <Text style={styles.textoMid}>{this.state.isUp[1]}</Text>
              <Text style={styles.textoMid}>{this.state.isUp[2]}</Text>
            </View>
            <TouchableOpacity
              style={styles.viewEstado}
              onPress={() => this.handleToogle()}
            >
              <Image source={this.state.state
                ? require('../img/IconeGreen.jpg')
                : require('../img/IconeRed.jpg')}
                style={{ width: 200, height: 100 }}
              />
            </TouchableOpacity>
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
		fontSize: 15,
		color: 'blue',
		fontWeight: 'bold',
		textAlign: 'center',
		fontFamily: 'sans-serif'
    }
});
