import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ContactsList} from '../../components/Lists/ContactsList/ContactsList';
import {Button} from '../../components/Buttons/Button';
import {Colors, Fonts, WindowSize} from '../../styles/styles';
import {PROFILE_JPG} from '../../utilities';
import {Link} from '../../components/Link/Link';

export const Home = () => {

  return (
    <View style={styles.container}>

      <View style={styles.profile_container}>
        <View style={styles.img_container}>
          <Image source={PROFILE_JPG} style={styles.img} />
        </View>

        <View style={styles.info}>
          <Text style={styles.title}>Jeremías del Pozo</Text>
          <Text style={styles.subtitle}>San Francisco</Text>
          <Text style={styles.dot}>•</Text>
          <Text style={styles.subtitle}>ID: 11206</Text>
        </View>

        <Link title={"Edit"} onPress={()=> console.log("edit")} />

        <View style={styles.container_buttons}>
          <Button title={"About me"}
                  size={"medium"}
                  color={"white"} />
          <Button title={"Reviews"}
                  size={"medium"}
                  color={"green"} />
        </View>
      </View>

      <View style={styles.contacts_container}>
        <ContactsList />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: Colors.background,
  },

  profile_container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    width: WindowSize.width,
  },

  contacts_container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    width: WindowSize.width,
    backgroundColor: Colors.dark_gray,
  },

  img_container: {
    justifyContent: "center",
    alignItems: "center",
    width: 115,
    height: 115,
    overflow: "hidden",
    borderRadius: 55,
  },

  img: {
    width: 115,
    height: 115,
    resizeMode: 'contain',
  },

  info: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: "wrap",
    width: 200,
    marginBottom: 15,
  },

  title: {
    fontFamily: Fonts.font,
    fontSize: 24,
    fontWeight: '500',
    color: Colors.dark_gray,
    marginTop: 15,
    marginBottom: 7
  },

  subtitle: {
    fontFamily: Fonts.font,
    fontSize: 16,
    fontWeight: '400',
    color: Colors.gray,
  },

  dot: {
    fontSize: 16,
    fontWeight: '800',
    color: Colors.gray,
    marginHorizontal: 8,
  },

  container_buttons: {
    flexDirection: 'row',
    justifyContent: "space-between",
    width: WindowSize.width * 0.84,
    marginTop: 15,
  },
})
