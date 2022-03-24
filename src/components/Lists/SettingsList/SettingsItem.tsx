import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {Colors, Fonts, WindowSize} from '../../../styles/styles';
import {ARROW_RIGHT_PNG} from '../../../utilities';

type Props = {
  title: string,
}

export const SettingsItem = ({title}: Props) => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Pressable>
        <Image source={ARROW_RIGHT_PNG}
               style={styles.img}/>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.dirty_white,
    width: WindowSize.width * 0.85,
    padding: 30,
    marginVertical: 15
  },

  title: {
    fontFamily: Fonts.font,
    fontSize: 16,
    color: Colors.gray,
  },

  img: {
    width: 8,
    height: 13,
  }
})
