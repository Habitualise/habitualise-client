import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {WelcomeScreen} from '@/features/auth';
import {LABEL} from '@/language';

const Stack = createNativeStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={LABEL.LOGIN_SCREEN} component={WelcomeScreen} />
    </Stack.Navigator>
  );
};
