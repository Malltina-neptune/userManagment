import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {AppNavigator} from './AppNavigator';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

export const Navigation = () => {
  return (
    <NavigationContainer theme={theme}>
      <AppNavigator />
    </NavigationContainer>
  );
};
