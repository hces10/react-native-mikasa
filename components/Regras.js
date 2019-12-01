import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Text, Picker, TextInput, TouchableOpacity } from 'react-native';

export default class Regras extends Component {
  constructor(props) {
    super(props);
    this.state = { type: '', value: '', turnOn: true, biggerThan: true };
  }

  renderCheck = (nameState, check01, check02) => (
    <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-evenly', marginTop: 20 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity
          style={{ ...styles.circle, backgroundColor: this.state[nameState] ? 'blue' : 'transparent' }}
          onPress={() => this.setState({ [nameState]: true })}
        />
        <Text style={styles.textCheck}>{check01}</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity
          style={{ ...styles.circle, backgroundColor: !this.state[nameState] ? 'blue' : 'transparent' }}
          onPress={() => this.setState({ [nameState]: false })}
        />
        <Text style={styles.textCheck}>{check02}</Text>
      </View>
    </View>
  )

  render() {
    return (
      <View>
        <ScrollView>
          <Text style={{ fontSize: 25, alignSelf: 'center' }}>Sistema de Prioridade</Text>
          <Picker
            selectedValue={this.state.type}
            style={{ height: 60, width: '80%', borderRadius: 20, alignSelf: 'center' }}
            onValueChange={item => this.setState({ type: item })} //item, index
          >
            <Picker.Item label="Data" value="date" />
            <Picker.Item label="Hora" value="hour" />
            <Picker.Item label="Sensor de Luz" value="light" />
            <Picker.Item label="Sensor de Temperatura" value="temper" />
          </Picker>
          {this.state.type == 'light' || this.state.type == 'temper'
          ? this.renderCheck('biggerThan', 'Maior que', 'Menor que')
          : null
          }
          <TextInput
            style={styles.inputText} placeholder='Escreva aqui o valor'
            onChangeText={value => this.setState({ value })} value={this.state.value}

          />
          <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-evenly', marginTop: 20 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <TouchableOpacity
                style={{ ...styles.circle, backgroundColor: this.state.turnOn ? 'blue' : 'transparent' }}
                onPress={() => this.setState({ turnOn: true })}
              />
              <Text style={styles.textCheck}>Ligar</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <TouchableOpacity
                style={{ ...styles.circle, backgroundColor: !this.state.turnOn ? 'blue' : 'transparent' }}
                onPress={() => this.setState({ turnOn: false })}
              />
              <Text style={styles.textCheck}>Desligar</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  viewRegra: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'cyan',
    borderRadius: 5,
    alignItems: 'center',
    height: 30,
  },
  scrollArea: {
    height: 200,
  },
  circle: {
    height: 30,
    width: 30,
    borderRadius: 15,
    borderColor: 'blue',
    borderWidth: 1,
  },
  textCheck: {
    marginStart: 5,
    fontSize: 18,
  },
  inputText: {
    height: 50,
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 20,
    marginHorizontal: 20,
    marginTop: 20,
    paddingStart: 15,
  },
});
