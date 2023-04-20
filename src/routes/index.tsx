import React from 'react';
import {useAuth0} from 'react-native-auth0';

import {AuthStack} from './AuthStack';
import {Text} from 'react-native-paper';

export const Router = () => {
  const {user} = useAuth0();

  if (user) {
    return <Text>Logged in</Text>;
  } else {
    return <AuthStack />;
  }
};
