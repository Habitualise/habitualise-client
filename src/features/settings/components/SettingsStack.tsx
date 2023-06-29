import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {SettingsScreen} from '@app/features/settings';
import {EditProfileModal} from './EditProfileModal';
import {LABEL} from '@app/language';

const Stack = createStackNavigator();

export const SettingsStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={LABEL.SETTINGS_SCREEN}
      screenOptions={{
        headerShown: false,
        cardOverlayEnabled: true,
      }}>
      <Stack.Screen name={LABEL.SETTINGS_SCREEN} component={SettingsScreen} />
      <Stack.Screen
        name={LABEL.EDIT_PROFILE_MODAL}
        component={EditProfileModal}
        options={() => ({
          cardOverlayEnabled: true,
        })}
      />
    </Stack.Navigator>
  );
};
