import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {SignIn, SignUp, Profile} from './screens';
import {Header} from '../components/Header/Header';

const Stack = createStackNavigator()

export const Navigator = ({check}: any) => {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={({route}) => ({
          header: () => (<Header title={route.name} check={check}/>)
      })}>
        <Stack.Screen name={"Sign In"}
                      component={SignIn} />
        <Stack.Screen name={"Sign Up"}
                      component={SignUp} />
        <Stack.Screen name={"Profile"}
                      component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
