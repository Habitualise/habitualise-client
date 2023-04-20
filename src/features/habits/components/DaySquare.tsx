import {themeColors} from '@/theme';
import React from 'react';

import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import {habitStatus} from '../types';

interface DaySquareProps {
  dayOfMonth: string;
  dayString: string;
  status: habitStatus;
}

export const DaySquare = ({dayOfMonth, status, dayString}: DaySquareProps) => {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Text
        variant="labelSmall"
        style={[
          daySquareStyles.dayString,
          status === 'completed' && daySquareStyles.completedText,
          status === 'missed' && daySquareStyles.missedText,
        ]}>
        {dayString}
      </Text>
      <View
        style={[
          daySquareStyles.container,
          status === 'completed' && daySquareStyles.completedContainer,
          status === 'missed' && daySquareStyles.missedContainer,
        ]}>
        <Text
          style={[
            daySquareStyles.dayOfMonth,
            status === 'completed' && daySquareStyles.completedText,
            status === 'missed' && daySquareStyles.missedText,
          ]}>
          {dayOfMonth}
        </Text>
      </View>
    </View>
  );
};

export const daySquareStyles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    borderRadius: 8,
    borderWidth: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: themeColors.grey[500],
  },
  dayString: {
    marginBottom: 4,
    color: themeColors.grey[500],
    fontWeight: 'bold',
  },
  dayOfMonth: {
    color: themeColors.grey[500],
    fontWeight: 'bold',
  },
  completedContainer: {
    backgroundColor: themeColors.successLight,
    borderColor: themeColors.success,
  },
  completedText: {
    color: themeColors.success,
  },
  missedContainer: {
    backgroundColor: themeColors.errorContainerLight,
    borderColor: themeColors.errorLight,
  },
  missedText: {
    color: themeColors.errorLight,
  },
});
