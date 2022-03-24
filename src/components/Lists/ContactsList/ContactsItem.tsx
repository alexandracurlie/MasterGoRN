import React from 'react';
import {Image, ImageSourcePropType, StyleSheet, Text, View} from 'react-native';
import {Colors, Fonts} from '../../../styles/styles';

type Props = {
  title: string,
  content: string,
  img: ImageSourcePropType,
  imgSize: { width: number | string, height: number | string, },
}

export const ContactsItem = ({title, content, img, imgSize}: Props) => {

  return (
    <View style={styles.container}>
      <View style={styles.container_img}>
        <Image source={img}
               style={imgSize} />
      </View>
      <View style={styles.container_info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.content}>{content}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    paddingVertical: 20,
    borderWidth: 1,
    borderColor: Colors.border,
  },

  container_img: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 25,
    borderRightWidth: 1,
    borderRightColor: Colors.border,
  },

  container_info: {
    justifyContent: "center",
    paddingHorizontal: 25,
  },

  title: {
    fontFamily: Fonts.font,
    color: Colors.light_gray,
    fontSize: 14,
    lineHeight: 22,
  },

  content: {
    fontFamily: Fonts.font,
    color: Colors.background,
    fontSize: 16,
    lineHeight: 22,
    letterSpacing: 0.35,
  },
})
