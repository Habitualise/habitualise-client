import React, {useMemo} from 'react';
import {View, StyleSheet, ColorValue} from 'react-native';

import {calculateDotColour} from '../utils/calculateDotColour';
import {themeColors} from '@app/theme';
import {HabitColor} from '@app/context/types';

interface DotProps {
  colorType: HabitColor;
  state: string;
  consecutiveDaysCompleted: number;
}

export const Dot = (props: DotProps) => {
  const {colorType, state, consecutiveDaysCompleted} = props;
  const dotColour = useMemo(
    () => calculateDotColour(colorType, consecutiveDaysCompleted),
    [colorType, consecutiveDaysCompleted],
  );

  return (
    <View
      style={[
        styles(dotColour).dot,
        state === 'SKIPPED' && styles(dotColour).skippedDot,
        state === 'MISSED' && styles(dotColour).missedDot,
      ]}
    />
  );
};

const styles = (dotColour: ColorValue) =>
  StyleSheet.create({
    dot: {
      width: 13,
      height: 13,
      borderRadius: 5,
      backgroundColor: dotColour,
    },
    skippedDot: {
      borderWidth: 3,
      borderColor: dotColour,
      backgroundColor: 'transparent',
    },
    missedDot: {
      backgroundColor: themeColors.grey[300],
    },
  });
