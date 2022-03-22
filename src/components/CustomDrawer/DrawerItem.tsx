import React from 'react';
import {Image, ImageSourcePropType, Pressable, StyleSheet, Text, View} from 'react-native';
import {Colors, Fonts} from '../../styles/styles';

type Props = {
  id: string,
  img: ImageSourcePropType,
  title?: string,
  active: number | string,
  onPress: () => void
}
export const DrawerItem = ({id, img, title, active, onPress}: Props) => {

  const container = active === id ? activeStyles.container : styles.container

  return (
    <Pressable style={styles.row} onPress={onPress}>
      <View style={container}>
        <Image source={img} style={styles.img} />
      </View>
      <Text>{title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  row: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 75,
    height: 75,
    borderRadius: 50,
    backgroundColor: Colors.deep_gray,
    padding: 20,
  },

  img: {
    width: "65%",
    height: "65%",
    resizeMode: "contain"
  },

  title: {
    marginTop: 10,
    fontFamily: Fonts.font,
    fontSize: 16,
    color: Colors.background,
  },
})

const activeStyles = StyleSheet.create({
  container: {
    ...styles.container,
    backgroundColor: Colors.green,
  }
})
