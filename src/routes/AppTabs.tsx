import React, {useEffect} from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {SettingsScreen} from '@/features/settings';
import {TodayScreen} from '@/features/today';
import {HabitsScreen} from '@/features/habits';
import {LABEL} from '@/language';
import {useStore, ACTIONS} from '@/context/StoreContext';
import {getHabits} from './api/getHabits';

const Tab = createMaterialBottomTabNavigator();

export const AppTabs = () => {
  const {dispatch} = useStore();

  // fetch habits from server and set them in the store
  useEffect(() => {
    const fetchHabits = async () => {
      const habits = await getHabits();
      dispatch({type: ACTIONS.SET_ALL_HABITS, payload: habits});
    };
    fetchHabits();
  }, [dispatch]);

  return (
    <Tab.Navigator shifting={true}>
      <Tab.Screen
        name={LABEL.TODAY_SCREEN}
        component={TodayScreen}
        options={{
          tabBarLabel: LABEL.TODAY,
          tabBarIcon: ({color}) => (
            <MaterialIcons name="event" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name={LABEL.HABITS_SCREEN}
        component={HabitsScreen}
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
        name={LABEL.GROUPS_SCREEN}
        component={TodayScreen}
        options={{
          tabBarLabel: LABEL.GROUPS,
          tabBarIcon: ({color}) => (
            <MaterialIcons name="groups" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name={LABEL.SETTINGS_SCREEN}
        component={SettingsScreen}
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
