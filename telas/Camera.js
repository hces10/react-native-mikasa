import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Camera extends Component {
  render() {
    return (
      <View>
        <Text> Streaming da Camera </Text>
        
      </View>
    );
  }
}

/*

npm install --save react-native-video
react-native link react-native-video


import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet } from 'react-native'
import Video from 'react-native-video'

export default class VideoComponent extends React.Component {

  renderVideo () {
      return(
        <Video
          source={require('./assets/Piano_Playing_Close.mp4')}
          style={{ width: 800, height: 800 }}
          muted={true}
          repeat={true}
          resizeMode={"cover"}
          volume={1.0}
          rate={1.0}
          ignoreSilentSwitch={"obey"}

        />
      )
  }

  render () {
    return (
      <View>
        {this.renderVideo()}
      </View>
    )
  }
}

// Later on in your styles..
var styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

*/
