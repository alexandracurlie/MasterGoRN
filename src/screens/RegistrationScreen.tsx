import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Header} from '../components/Header/Header';
import {SignUp} from '../components/registration/SignUp';

export const RegistrationScreen = () => {

  return (
    <View style={styles.container}>
      <Header />
      <SignUp />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  }
})

