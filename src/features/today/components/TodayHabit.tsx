import React from 'react';
import {Divider, Text} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {HabitIcon} from '@app/components/HabitIcon';
import {ACTIONS, DispatchParams, useStore} from '@app/context/StoreContext';
import {formatDaysDue} from '../utils/formatDaysDue';
import {PressableCard} from '@app/components/PressableCard';
import {HabitColor} from '@app/context/types';
import {useCustomTheme} from '@app/theme/useCustomTheme';

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

  const theme = useCustomTheme();

  const toggleHabitCompleted = () => {
    dispatch({
      type: ACTIONS.TOGGLE_HABIT_IS_COMPLETED,
      payload: id,
    } as DispatchParams);
  };

  const styles = (isGreyedOut = false) =>
    StyleSheet.create({
      habitName: {
        marginBottom: 4,
        fontWeight: 'bold',
        textDecorationLine: isGreyedOut ? 'line-through' : 'none',
        color: isGreyedOut ? theme.colors.grey[500] : theme.colors.grey[900],
      },
      habitDaysDue: {
        color: isGreyedOut ? theme.colors.grey[400] : theme.colors.grey[500],
      },
    });

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
            isCompletedToday ? theme.colors.success : theme.colors.grey[400]
          }
          size={25}
        />
      </PressableCard>
      <Divider />
    </>
  );
};
