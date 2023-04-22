import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {MD3LightTheme, Provider as PaperProvider} from 'react-native-paper';

import {Router} from './routes';
import {themeColors} from './theme';

const NavigationTheme = {
  ...DefaultTheme,
  dark: true,
};

const theme = {
  ...MD3LightTheme,
  dark: true,
  colors: themeColors,
};

export const App = () => {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={NavigationTheme}>
        <Router />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
