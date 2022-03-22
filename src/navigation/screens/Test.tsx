import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../styles/styles';

export const Test = () => (
  <View style={styles.container}>
    <Text>This page is under construction</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background,
  }
})
