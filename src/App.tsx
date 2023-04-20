import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {MD3LightTheme, Provider as PaperProvider} from 'react-native-paper';
import {QueryClientProvider} from 'react-query';
import {queryClient} from './lib/react-query';

import {themeColors} from './theme';
import {Router} from './routes';
import Interceptor from './context/Interceptor';
import {StoreContextProvider, reducer} from './context/StoreContext';

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
      <QueryClientProvider client={queryClient}>
        <Interceptor>
          <StoreContextProvider reducer={reducer}>
            <NavigationContainer theme={NavigationTheme}>
              <Router />
            </NavigationContainer>
          </StoreContextProvider>
        </Interceptor>
      </QueryClientProvider>
    </PaperProvider>
  );
};

export default App;
