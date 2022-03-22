import React, {useState} from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Home} from './screens';
import {Test} from './screens/Test';
import {CustomDrawer} from '../components/CustomDrawer/CustomDrawer';
import {Colors, Fonts} from '../styles/styles';
import {DrawerItem} from '../components/CustomDrawer/DrawerItem';
import {HOME_PNG, MESSAGES_PNG, PROFILE_PNG, SETTINGS_PNG} from '../utilities';

const Drawer = createDrawerNavigator()

export const DrawerHome = (...props: any) => {
  const [active, setActive] = useState<number | string>("1")

  return (
    <Drawer.Navigator screenOptions={
      {
        headerShown: false,
        drawerActiveTintColor: Colors.background,
        drawerInactiveTintColor: Colors.background,
        drawerActiveBackgroundColor: "transparent",
        drawerLabelStyle: {
          fontFamily: Fonts.font,
          fontSize: 15,
        },
      }}
                      drawerContent={(props) => <CustomDrawer {...props}/>} >
      <Drawer.Screen name={"Home"} component={Home}
                     options={{
                       drawerIcon: () => (
                         <DrawerItem id={"1"}
                                     active={active}
                                     img={HOME_PNG}
                                     onPress={() => { setActive("1") }}/>
                       )}} />
      <Drawer.Screen name={"Profile"}
                     component={Test}
                     options={{
                       drawerIcon: () => (
                         <DrawerItem id={"2"}
                                     active={active}
                                     img={PROFILE_PNG}
                                     onPress={() => { setActive("2") }}/>
                       ),
                     }}
      />
      <Drawer.Screen name={"Settings"}
                     component={Test}
                     options={{
                       drawerIcon: () => (
                         <DrawerItem id={"3"}
                                     active={active}
                                     img={SETTINGS_PNG}
                                     onPress={() => { setActive("3") }}/>
                       ),
                     }}
      />
      <Drawer.Screen name={"Messages"}
                     component={Test}
                     options={{
                       drawerIcon: () => (
                         <DrawerItem id={"4"}
                                     active={active}
                                     img={MESSAGES_PNG}
                                     onPress={() => { setActive("4") }}/>
                       ),
                     }}
      />
    </Drawer.Navigator>
  )
}
