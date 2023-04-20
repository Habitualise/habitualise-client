import React from 'react';
import {StyleSheet, View} from 'react-native';

import {getWeekViewData} from '../utils/getWeekViewData';
import {DaySquare} from './DaySquare';

interface WeekViewProps {
  lastSevenCompletions: string[];
  daysDue: number[];
}

export const WeekView = (props: WeekViewProps) => {
  const {lastSevenCompletions, daysDue} = props;

  const weekViewData = getWeekViewData(lastSevenCompletions, daysDue);

  return (
    <View style={styles.weekViewContainer}>
      {weekViewData.map((day, index) => {
        return (
          <DaySquare
            key={index}
            dayOfMonth={day.dayOfMonth}
            status={day.status}
            dayString={day.dayString}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  weekViewContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
});
