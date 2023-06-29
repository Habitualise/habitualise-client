import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {MD3LightTheme, Provider as PaperProvider} from 'react-native-paper';
import {themeColors} from './theme';
import {reducer, StoreContextProvider} from '@app/context/StoreContext';
import {AuthStack} from '@app/routes/AuthStack';

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
          <AuthStack />
        </NavigationContainer>
      </StoreContextProvider>
    </PaperProvider>
  );
};

export default App;
