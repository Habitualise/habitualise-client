import React from 'react';
import {Divider, Text} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {customLightThemeColors} from '@app/theme';
import {HabitIcon} from '@app/components/HabitIcon';
import {ACTIONS, DispatchParams, useStore} from '@app/context/StoreContext';
import {formatDaysDue} from '../utils/formatDaysDue';
import {PressableCard} from '@app/components/PressableCard';
import {HabitColor} from '@app/context/types';

interface TodayHabitProps {
  id: string;
  name: string;
  iconName: string;
  colour: HabitColor;
  isCompletedToday: boolean;
  daysDue: number[];
}

export const TodayHabit = (props: TodayHabitProps) => {
  const {id, name, iconName, colour, isCompletedToday, daysDue} = props;
  const {dispatch} = useStore();

  const toggleHabitCompleted = () => {
    dispatch({
      type: ACTIONS.TOGGLE_HABIT_IS_COMPLETED,
      payload: id,
    } as DispatchParams);
  };

  return (
    <>
      <PressableCard
        onPress={toggleHabitCompleted}
        isGreyedOut={isCompletedToday}>
        <HabitIcon iconName={iconName} colour={colour} />
        <View style={{flex: 1}}>
          <Text style={styles(isCompletedToday).habitName}>{name}</Text>
          <Text
            style={styles(isCompletedToday).habitDaysDue}
            variant={'bodySmall'}>
            {formatDaysDue(daysDue)}
          </Text>
        </View>
        <MaterialCommunityIcons
          name={isCompletedToday ? 'check-circle' : 'circle-outline'}
          color={
            isCompletedToday
              ? customLightThemeColors.successGreyedOut
              : customLightThemeColors.grey[400]
          }
          size={25}
        />
      </PressableCard>
      <Divider />
    </>
  );
};

const styles = (isCompletedToday = false) =>
  StyleSheet.create({
    habitName: {
      marginBottom: 4,
      fontWeight: 'bold',
      textDecorationLine: isCompletedToday ? 'line-through' : 'none',
      color: isCompletedToday
        ? customLightThemeColors.grey[500]
        : customLightThemeColors.grey[900],
    },
    habitDaysDue: {
      color: isCompletedToday
        ? customLightThemeColors.grey[400]
        : customLightThemeColors.grey[500],
    },
  });
