import React from 'react';
import {useAuth0} from 'react-native-auth0';

import {AuthStack} from './AuthStack';
import {AppTabs} from './AppTabs';

export const Router = () => {
  const {user} = useAuth0();

  if (user) {
    return <AppTabs />;
  } else {
    return <AuthStack />;
  }
};
