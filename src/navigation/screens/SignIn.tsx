import React from 'react';
import {Image, StyleSheet, TextInput, View, Text, Pressable} from 'react-native';
import {Button} from '../../components/Buttons/Button';
import {Social} from '../../components/Social/Social';
import {Colors, Fonts, WindowSize} from '../../styles/styles';
import {SIGN_IN_PNG} from '../../utilities';

export const SignIn = ({navigation}: any) => {

  const onPress = () => {
    navigation.navigate('Main');
  }

  return (
    <View style={styles.container}>

      <Image source={SIGN_IN_PNG}
             style={styles.img} />

      <View style={styles.form}>
        <TextInput style={styles.input}
                   placeholder={"Username"}
                   placeholderTextColor={Colors.light_gray}
                   keyboardType={'email-address'} />

        <TextInput style={styles.input}
                   placeholder={"Password"}
                   placeholderTextColor={Colors.light_gray} />

        <Pressable style={{width: WindowSize.width * 0.85}}>
          <Text style={[styles.text, styles.textAlign_right]}>Forgot your password?</Text>
        </Pressable>
      </View>

      <Button title={"Login"}
              onPress={onPress}
              color={"green"}
              size={"large"} />

      <Text style={[styles.text, styles.textAlign_center]}>or</Text>

      <Social />

      <View style={styles.container_bottom}>
        <Text style={[styles.text]}>Don't have an account?</Text>
        <Text style={[styles.text, styles.bottom_link]}
              onPress={() => { navigation.navigate('Sign Up'); }}>
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
