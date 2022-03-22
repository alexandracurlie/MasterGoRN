import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors} from '../../styles/styles';
import {DrawerItemList} from '@react-navigation/drawer';

export const CustomDrawer = (props: any) => {

  return (
      <View style={{flex: 1}}>
        <View style={styles.container}>
          <DrawerItemList {...props} />
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark_gray,
    justifyContent: "space-evenly",
  },
})
