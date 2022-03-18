import React from 'react';
import {Image, Linking, Pressable, StyleSheet, View} from 'react-native';
import {Colors, WindowSize} from '../../styles/styles';
import {socials} from '../../utilities';

export const Social = () => (
  <View style={styles.social_container}>
    {
      socials.map(item => (
      <Pressable key={item.id}
                 style={styles.social}
                 onPress={() => Linking.openURL(item.link)}>
        <Image source={item.img} style={styles.social_img} />
      </Pressable>))
    }
  </View>
)

const styles = StyleSheet.create({
  social_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: WindowSize.width * 0.85,
  },

  social: {
    justifyContent: "center",
    alignItems: "center",
    width: WindowSize.width * 0.27,
    padding: 20,
    borderWidth: 1,
    borderColor: Colors.border,
  },

  social_img: {
    width: 17,
    height: 17,
    alignItems: "center",
    resizeMode: 'contain',
  },
})
