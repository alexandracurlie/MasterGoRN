import React from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import {SIGN_UP_PNG} from '../../utilities';
import {Colors, Fonts, WindowSize} from '../../styles/styles';
import {Button} from '../Buttons/Button';
import {Social} from '../Social/Social';

export const SignUp = ({navigation}: any) => {

  const onPress = () => console.log("wow")

  return (
    <View style={styles.container}>

      <Image source={SIGN_UP_PNG}
             style={styles.img} />

      <View style={styles.form}>
        <TextInput style={styles.input}
                   placeholder={"Enter email"}
                   placeholderTextColor={Colors.light_gray}
                   keyboardType={'email-address'} />

        <TextInput style={styles.input}
                   placeholder={"Enter password"}
                   placeholderTextColor={Colors.light_gray} />

        <TextInput style={styles.input}
                   placeholder={"Confirm password"}
                   placeholderTextColor={Colors.light_gray} />
      </View>

      <Button onPress={onPress} title={"Sign Up"} />

      <Text style={[styles.text, styles.textAlign_center]}>or</Text>

      <Social />

      <View style={styles.container_bottom}>
        <Text style={[styles.text]}>Already have an account?</Text>
        <Text style={[styles.text, styles.bottom_link]}
              onPress={() => {
                navigation.navigate('Sign In');
              }}>
          Sign
        </Text>
      </View>

    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: "center",
    backgroundColor: Colors.background,
  },

  img: {
    width: WindowSize.width,
    flex: 0.35,
    alignItems: "center",
    resizeMode: 'contain',
  },

  form: {
    width: WindowSize.width,
    justifyContent: "space-between",
    alignItems: "center",
  },

  input: {
    width: WindowSize.width * 0.85,
    backgroundColor: Colors.dirty_white,
    margin: 10,
    padding: 20,
    fontFamily: Fonts.font,
    fontSize: 16,
  },

  text: {
    fontFamily: Fonts.font,
    fontSize: 16,
    color: Colors.gray,
  },

  textAlign_center: {
    textAlign: 'center',
  },

  textAlign_right: {
    textAlign: 'right',
  },

  container_bottom: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: WindowSize.width * 0.85,
  },

  bottom_link: {
    color: Colors.orange,
    marginLeft: 5,
    textDecorationLine: "underline",
  },
})
