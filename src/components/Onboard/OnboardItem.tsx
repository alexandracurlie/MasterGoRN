import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Colors, Fonts, WindowSize} from '../../styles/styles';
import {OnboardItemType} from '../../utilities';

export const OnboardItem = ({title, img, description}: Omit<OnboardItemType, "id">) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <Image source={img} style={styles.img} />
    <Text style={styles.description}>{description}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  title: {
    fontFamily: Fonts.font,
    fontWeight: "500",
    fontSize: 40,
    textAlign: "center",
    color: Colors.dark_gray,
  },

  img: {
    width: WindowSize.width,
    flex: 0.5,
    alignItems: "center",
    resizeMode: 'contain',
  },

  description: {
    fontFamily: Fonts.font,
    fontSize: 16,
    fontWeight: "400",
    color: Colors.gray,
    width: WindowSize.width * 0.7,
    textAlign: "center",
  },
})
