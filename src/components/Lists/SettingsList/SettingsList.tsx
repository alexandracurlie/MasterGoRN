import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {SettingsItem} from './SettingsItem';
import {Link} from '../../Link/Link';
import {settingsData} from '../../../utilities';

type Props = {
  onPress: () => void,
  item: {
    id: string,
    title: string,
  }
}

export const SettingsList = ({onPress}: Pick<Props,"onPress">) => {

  const renderItem = ({item}: Pick<Props,"item">) =>
    <SettingsItem title={item.title} />


  return <FlatList data={settingsData}
                   renderItem={renderItem}
                   keyExtractor={item => item.id}
                   ListFooterComponent={<Link title={"Log out"} onPress={onPress} />}
                   ListFooterComponentStyle={styles.listFooterComponentStyle} />

}

const styles = StyleSheet.create({
  listFooterComponentStyle: {
    marginVertical: 20,
  }
})
