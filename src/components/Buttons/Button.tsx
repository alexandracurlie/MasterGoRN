import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {Colors, Fonts, WindowSize} from '../../styles/styles';

type Props = {
  onPress?: () => Promise<void> | void,
  title: string,
  color: "green" | "white",
  size: "large" | "medium",
}

export const Button = ({onPress, title, color, size}: Props) => {
  const btnSize = size === "medium" ? styles.size_medium : styles.size_large;
  const btnColor = color === "white" ? styles.white_color : styles.green_color;

  return (
    <Pressable style={[styles.button, btnSize, btnColor]}
               onPress={onPress}>
      <Text style={[styles.button_title, btnColor]}>{title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.border,
  },

  button_title: {
    fontFamily: Fonts.font,
    fontSize: 16,
    fontWeight: "400",
  },

  size_large: {
    width: WindowSize.width * 0.85,
    height: WindowSize.height * 0.07,
  },

  size_medium: {
    width: WindowSize.width * 0.4,
    height: WindowSize.height * 0.07,
  },

  green_color: {
    backgroundColor: Colors.green,
    color: Colors.background,
  },

  white_color: {
    backgroundColor: Colors.background,
    color: Colors.gray,
  }
})
