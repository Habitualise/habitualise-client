import React from 'react';
import {Divider, IconButton, Text} from 'react-native-paper';

import {HabitIcon} from '@app/components/HabitIcon';
import {StyleSheet, View} from 'react-native';
import {themeColors} from '@app/theme';
import {LABEL} from '@app/language';
import {DotHistory} from './DotHistory';
import {HabitColor} from '@app/context/types';

interface HabitProps {
  id: string;
  name: string;
  iconName: string;
  colour: HabitColor;
  completionPercentage: number;
  status: 'active' | 'archived';
  completionHistory: string[];
  daysDue: number[];
}

export const Habit = (props: HabitProps) => {
  const {
    // id,
    name,
    iconName,
    colour,
    completionPercentage,
    // status,
    completionHistory,
    // daysDue,
  } = props;

  return (
    <>
      <View style={styles.cardContainer}>
        <HabitIcon iconName={iconName} colour={colour} />
        <View style={{flex: 1}}>
          <Text style={styles.habitName}>{name}</Text>
          <Text style={styles.habitDaysDue} variant={'bodySmall'}>
            {LABEL.DAYS_COMPLETED(completionPercentage)}
          </Text>
        </View>
        <IconButton
          icon={'dots-vertical'}
          onPress={() => console.log('three dots pressed')}
        />
      </View>
      <View style={styles.dotHistoryContainer}>
        <DotHistory completionHistory={completionHistory} colour={colour} />
      </View>
      <Divider />
    </>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  habitName: {
    marginBottom: 4,
    fontWeight: 'bold',
  },
  habitDaysDue: {
    color: themeColors.grey[500],
  },
  dotHistoryContainer: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
});
