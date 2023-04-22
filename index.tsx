/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Auth0Provider} from 'react-native-auth0';

import App from '@app/App';
import {AUTH0_DOMAIN, AUTH0_CLIENT_ID} from '@env';
import {name as appName} from './app.json';

interface IProps {}

const Main: React.FC<IProps> = (): JSX.Element => {
  return (
    <SafeAreaProvider>
      <Auth0Provider domain={AUTH0_DOMAIN} clientId={AUTH0_CLIENT_ID}>
        <App />
      </Auth0Provider>
    </SafeAreaProvider>
  );
};

AppRegistry.registerComponent(appName, () => Main);
