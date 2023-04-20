import React from 'react';
import {useAuth0} from 'react-native-auth0';

import {AppTabs} from './AppTabs';
import {AuthStack} from './AuthStack';

export const Router = () => {
  const {user} = useAuth0();

  if (user) {
    return <AppTabs />;
  } else {
    return <AuthStack />;
  }
};
