import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {ARROW_PNG, BURGER_PNG} from '../../utilities';
import {Colors, Fonts, WindowSize} from '../../styles/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

type Props = {
  title: string,
  navigation?: any,
  check: any,
}

export const Header = ({title, check}: Props) => {
  const navigation = useNavigation()

  const toOnboard = () => {
    AsyncStorage.removeItem('@viewed')
      .catch(error => console.log('Error at clearOnboard', error))
      .then(() => check())
  }

  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.goBack()}>
        <Image source={ARROW_PNG}
               style={styles.arrow} />
      </Pressable>
      <Text style={styles.title}> {title} </Text>
      <Pressable onPress={toOnboard}>
        <Image source={BURGER_PNG}
               style={styles.burger} />
      </Pressable>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    width: WindowSize.width,
    paddingHorizontal: 30,
    paddingVertical: 15,
    backgroundColor: Colors.background,
  },

  title: {
    fontFamily: Fonts.font,
    fontWeight: '400',
    fontSize: 20,
    letterSpacing: .38,
    color: Colors.dark_gray,

  },

  arrow: {
    width: 10,
    height: 15,
  },

  burger: {
    width: 18,
    height: 8,
  },
})
