import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';


export default class Regras extends Component {
  render() {
    return (
      <View>
          <ScrollView>
              <Text style={{ fontSize: 35 }}>Sistema de Prioridade</Text> 
              <View style={styles.viewRegra}><Text>1</Text></View>
              <View style={styles.viewRegra}><Text>2</Text></View>
              <View style={styles.viewRegra}><Text>3</Text></View>
              <View style={styles.viewRegra}><Text>4</Text></View>
              <View style={styles.viewRegra}><Text>5</Text></View>
              <View style={styles.viewRegra}><Text>6</Text></View>
              <View style={styles.viewRegra}><Text>7</Text></View>
              <View style={styles.viewRegra}><Text>8</Text></View>
              <View style={styles.viewRegra}><Text>9</Text></View>
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
        height: 30
    },
    scrollArea: {
        height: 200

    }
});
