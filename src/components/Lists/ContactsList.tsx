import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {ContactsItem} from './ContactsItem';
import {contacts} from '../../utilities';
import {WindowSize} from '../../styles/styles';

export const ContactsList = () => {

  const renderItem = ({item}: any) =>
    <ContactsItem title={item.title}
                  content={item.content}
                  img={item.img}
                  imgSize={item.img_size} />

  return (
    <FlatList data={contacts}
              renderItem={renderItem}
              style={styles.container}
              keyExtractor={item => item.id}
              contentContainerStyle={styles.contentContainerStyle} />
  )
}

const styles = StyleSheet.create({
  container: {
    width: WindowSize.width * 0.85,
    height: "100%",
    marginVertical: WindowSize.height * 0.04,
  },

  contentContainerStyle: {
    flex: 1,
    justifyContent: "space-evenly",
  }
})
