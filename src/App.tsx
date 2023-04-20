import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {Router} from './routes';

export const App = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

export default App;
