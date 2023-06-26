import React, {useEffect} from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {ColorValue} from 'react-native';

import {TodayScreen} from '@app/features/today';
import {HabitsStack} from '@app/features/habits';
import {LABEL} from '@app/language';
import {ACTIONS, useStore} from '@app/context/StoreContext';
import {getHabits} from './api/getHabits';
import {getUser} from '@app/routes/api/getUser';
import {SettingsStack} from '@app/features/settings/components/SettingsStack';

const Tab = createMaterialBottomTabNavigator();

export const AppTabs = () => {
  const {dispatch} = useStore();

  // fetch habits and user from server and set them in the store
  useEffect(() => {
    const fetchHabitsAndUser = async () => {
      const habits = await getHabits();
      const userBE = await getUser();
      dispatch({type: ACTIONS.SET_ALL_HABITS, payload: habits});
      dispatch({type: ACTIONS.SET_USER, payload: userBE});
    };
    fetchHabitsAndUser();
  }, [dispatch]);

  return (
    <Tab.Navigator>
      <Tab.Screen
        name={LABEL.TODAY_SCREEN}
        component={TodayScreen}
        options={{
          tabBarLabel: LABEL.TODAY,
          tabBarIcon: ({color}: {color: ColorValue}) => (
            <MaterialIcons name="event" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name={LABEL.HABITS_STACK}
        component={HabitsStack}
        options={{
          tabBarLabel: LABEL.HABITS,
          tabBarIcon: ({color}) => (
            <MaterialIcons
              name="local-fire-department"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name={LABEL.SETTINGS_STACK}
        component={SettingsStack}
        options={{
          tabBarLabel: LABEL.SETTINGS,
          tabBarIcon: ({color}) => (
            <MaterialIcons name="settings" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
