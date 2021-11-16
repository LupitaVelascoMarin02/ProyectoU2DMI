import { StatusBar} from 'expo-status-bar';
import React, { Component, useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export class Perfil extends Component {
  render() {
    return (
      <View style={StyleSheet.container}>
        <Text> textInComponent </Text>
        <StatusBar style="auto" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Perfil
