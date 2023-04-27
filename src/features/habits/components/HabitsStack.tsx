import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import {HabitsScreen} from './HabitsScreen';
import {AddHabitModal} from './AddHabit/AddHabitModal';
import {PickIconModal} from './AddHabit/PickIconModal';
import {LABEL} from '@app/language';

const Stack = createStackNavigator();

export const HabitsStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={LABEL.HABITS_SCREEN}
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
        headerShown: false,
        cardOverlayEnabled: true,
      }}>
      <Stack.Screen name={LABEL.HABITS_SCREEN} component={HabitsScreen} />
      <Stack.Screen
        name={LABEL.ADD_HABIT_MODAL}
        component={AddHabitModal}
        options={() => ({
          cardOverlayEnabled: true,
          gestureDirection: 'vertical',
        })}
      />
      <Stack.Screen
        name={LABEL.PICK_ICON_MODAL}
        component={PickIconModal}
        options={() => ({
          cardOverlayEnabled: true,
          gestureDirection: 'vertical',
        })}
      />
    </Stack.Navigator>
  );
};
