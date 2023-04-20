/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Auth0Provider} from 'react-native-auth0';

import App from '@app/App';
import {AUTH0_DOMAIN, AUTH0_CLIENT_ID} from '@env';
import {name as appName} from './app.json';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    // primary: 'tomato', // placeholder for future changes
    // secondary: 'yellow',
  },
};

export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <SafeAreaProvider>
        <Auth0Provider domain={AUTH0_DOMAIN} clientId={AUTH0_CLIENT_ID}>
          <App />
        </Auth0Provider>
      </SafeAreaProvider>
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
