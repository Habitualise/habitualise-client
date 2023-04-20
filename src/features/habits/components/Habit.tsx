import React from 'react';
import {Divider, IconButton, Text} from 'react-native-paper';

import {HabitIcon} from '@/components/HabitIcon';
import {StyleSheet, View} from 'react-native';
import {themeColors} from '@/theme';
import {LABEL} from '@/language';
import {WeekView} from './WeekView';

interface HabitProps {
  id: string;
  name: string;
  iconName: string;
  colour: string;
  completionPercentage: number;
  status: 'active' | 'archived';
  lastSevenCompletions: string[];
  daysDue: number[];
}

export const Habit = (props: HabitProps) => {
  const {
    id,
    name,
    iconName,
    colour,
    completionPercentage,
    status,
    lastSevenCompletions,
    daysDue,
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
      <WeekView lastSevenCompletions={lastSevenCompletions} daysDue={daysDue} />
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
});
