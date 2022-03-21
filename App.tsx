import React, {useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import {View, useColorScheme} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Onboard} from './src/components/Onboard/Onboard';
import {StackNavigator} from './src/navigation/StackNavigator';

//TODO: take the func CHECK() out of App

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [viewedOnboard, setViewedOnboard] = useState(false)

  const check = () => {
    AsyncStorage.getItem('@viewed')
      .then(value => { setViewedOnboard(value !== null) })
      .catch(error => console.log("Error at checkOnboard", error))
  }

  useEffect(() => {
    check()
  }, [])

  return (
    <View style={{flex: 1}}>
      { viewedOnboard
        ? <StackNavigator check={check}/>
        : <Onboard check={check}/> }
    </View>
  );
};

export default App;
