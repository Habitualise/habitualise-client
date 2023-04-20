import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TodayScreen} from '@app/features/today';
import {LABEL} from '@app/language';

const Tab = createBottomTabNavigator();

export const AppTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={LABEL.TODAY_SCREEN} component={TodayScreen} />
    </Tab.Navigator>
  );
};
