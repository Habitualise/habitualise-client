import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {MD3LightTheme, Provider as PaperProvider} from 'react-native-paper';

import {Router} from './routes';
import {themeColors} from './theme';
import {StoreContextProvider, reducer} from '@app/context/StoreContext';

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
      <StoreContextProvider reducer={reducer}>
        <NavigationContainer theme={NavigationTheme}>
          <Router />
        </NavigationContainer>
      </StoreContextProvider>
    </PaperProvider>
  );
};

export default App;
