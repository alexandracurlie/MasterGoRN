import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SettingsList} from '../../components/Lists/SettingsList/SettingsList';
import {Colors} from '../../styles/styles';

export const Settings = ({navigation}: any) => {
  const nav = () => { navigation.navigate('Sign In') }

  return (
    <View style={styles.container}>
      <SettingsList onPress={nav}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: Colors.background,
  },
})
