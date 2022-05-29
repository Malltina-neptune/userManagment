import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../screens/home/HomeScreen';
import SplashScreen from '../screens/splash/SplashScreen';

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="splash">
      <Stack.Screen name="splash" component={SplashScreen} />
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="result" component={ResultScreen} />
    </Stack.Navigator>
  );
};
