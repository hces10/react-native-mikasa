import React, { Component } from 'react';
import { Text, TouchableOpacity, View, StyleSheet, Picker } from 'react-native';
import Modal from 'react-native-modal';

export default class ModalTester extends Component {
  state = {
    isModalVisible: false
  };

  toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });

  render() {
    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={this.toggleModal} style={styles.botao}>
            <Text style={styles.textoBotao}>Automatizar</Text>
          </TouchableOpacity>
        <Modal 
          isVisible={this.state.isModalVisible}
          onBackdropPress={() => this.setState({ isModalVisible: false })}
          animationInTiming={1000}
          animationOutTiming={1000}
          backdropTransitionInTiming={1000}
          backdropTransitionOutTiming={1000}
        >
          <View style={styles.modalContent}>
            <Picker
              selectedValue={this.state.language}
              style={{ height: 50, width: '100%' }}
              onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
              <Picker.Item label='Data e Hora' value='DeH' />
              <Picker.Item label="Sensor de Temperatura" value="sTemp" />
              <Picker.Item label="Sensor de Chuva" value="sChuv" />
            </Picker>
            <TouchableOpacity onPress={() => this.setState({ isModalVisible: false })}>
              <View style={styles.button}>
                <Text>Close</Text>
              </View>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 12,
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)'
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)'
  },
  textoBotao: {
    fontSize: 25,
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  botao: {
    flex: 1,
    borderRadius: 15,
    backgroundColor: '#538530',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    margin: 5
  }
});
