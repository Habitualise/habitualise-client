import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {WelcomeScreen} from '@app/features/auth';
import {AppTabs} from './AppTabs';
import {LABEL} from '@app/language';
import {useAuth0} from 'react-native-auth0';

const Stack = createNativeStackNavigator();

export const AuthStack = () => {
  const {user} = useAuth0();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {user ? (
        <Stack.Screen name={LABEL.APP_TABS} component={AppTabs} />
      ) : (
        <Stack.Screen name={LABEL.LOGIN_SCREEN} component={WelcomeScreen} />
      )}
    </Stack.Navigator>
  );
};
