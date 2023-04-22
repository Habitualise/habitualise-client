import React from 'react';
import {Divider, Text} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {themeColors} from '@app/theme';
import {HabitIcon} from '@app/components/HabitIcon';
import {useStore, ACTIONS} from '@app/context/StoreContext';
import {formatDaysDue} from '../utils/formatDaysDue';
import {PressableCard} from '@app/components/PressableCard';

interface TodayHabitProps {
  id: string;
  name: string;
  iconName: string;
  colour: string;
  isCompleted: boolean;
  daysDue: number[];
}

export const TodayHabit = (props: TodayHabitProps) => {
  const {id, name, iconName, colour, isCompleted, daysDue} = props;
  const {dispatch} = useStore();

  const toggleHabitCompleted = () => {
    dispatch({
      type: ACTIONS.TOGGLE_HABIT_IS_COMPLETED,
      payload: id,
    });
  };

  return (
    <>
      <PressableCard onPress={toggleHabitCompleted} isGreyedOut={isCompleted}>
        <HabitIcon iconName={iconName} colour={colour} />
        <View style={{flex: 1}}>
          <Text style={styles(isCompleted).habitName}>{name}</Text>
          <Text style={styles(isCompleted).habitDaysDue} variant={'bodySmall'}>
            {formatDaysDue(daysDue)}
          </Text>
        </View>
        <MaterialCommunityIcons
          name={isCompleted ? 'check-circle' : 'circle-outline'}
          color={
            isCompleted ? themeColors.successGreyedOut : themeColors.grey[400]
          }
          size={25}
        />
      </PressableCard>
      <Divider />
    </>
  );
};

const styles = (isCompleted = false) =>
  StyleSheet.create({
    habitName: {
      marginBottom: 4,
      fontWeight: 'bold',
      textDecorationLine: isCompleted ? 'line-through' : 'none',
      color: isCompleted ? themeColors.grey[500] : themeColors.grey[900],
    },
    habitDaysDue: {
      color: isCompleted ? themeColors.grey[400] : themeColors.grey[500],
    },
  });
