import React from 'react';
import {Image, Linking, Pressable, StyleSheet, View} from 'react-native';
import {WindowSize} from '../../styles/styles';
import {socials} from '../../utilities';

export const Social = () => {
  return (
    <View style={styles.social_container}>
      { socials.map(item => (
        <Pressable key={item.id}
                   style={styles.social}
                   onPress={() => Linking.openURL(item.link)}
        >
          <Image source={item.img} style={styles.social_img} />
        </Pressable>)) }
    </View>
  )
}

const styles = StyleSheet.create({
  social_container: {
    flexDirection: "row",
    width: WindowSize.width * 0.85,
    justifyContent: "space-between",
  },

  social: {
    borderWidth: 1,
    borderColor: "rgba(226, 226, 224, 0.5)",
    width: WindowSize.width * 0.27,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  social_img: {
    width: 17,
    height: 17,
    alignItems: "center",
    resizeMode: 'contain',
  },
})
