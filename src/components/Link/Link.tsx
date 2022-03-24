import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {Colors, Fonts} from '../../styles/styles';

type Props = {
  title: string,
  onPress: () => void,
}

export const Link = ({title, onPress}: Props) => {

  return (
    <Text style={styles.link} onPress={onPress}>
      {title}
    </Text>
  )
}

const styles = StyleSheet.create({
  link: {
    fontFamily: Fonts.font,
    fontSize: 16,
    color: Colors.orange,
    marginLeft: 5,
    textDecorationLine: "underline",
  },
})
