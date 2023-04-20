import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {WelcomeScreen} from '@app/features/auth';
import {LABEL} from '@app/language';

const Stack = createNativeStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={LABEL.SIGN_IN_SCREEN} component={WelcomeScreen} />
    </Stack.Navigator>
  );
};
