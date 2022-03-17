import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {Colors, Fonts, WindowSize} from '../../styles/styles';

type Props = {
  onPress: () => Promise<void> | void,
  title: string,
}

export const Button = ({onPress, title}: Props) => (
  <Pressable style={styles.button}
             onPress={onPress}>
    <Text style={styles.button_title}>{title}</Text>
  </Pressable>
)

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: 'center',
    width: WindowSize.width * 0.85,
    height: WindowSize.height * 0.07,
    backgroundColor: Colors.green,
  },

  button_title: {
    fontFamily: Fonts.font,
    fontSize: 16,
    fontWeight: "400",
    color: Colors.background,
  },
})
