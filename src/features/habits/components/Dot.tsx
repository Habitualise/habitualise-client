import React, {useMemo} from 'react';
import {ColorValue, StyleSheet, View} from 'react-native';

import {calculateDotColour} from '../utils/calculateDotColour';
import {themeColors} from '@app/theme';
import {HabitColor} from '@app/context/types';

interface DotProps {
  colorType: HabitColor;
  completed: boolean;
  consecutiveDaysCompleted: number;
}

export const Dot = (props: DotProps) => {
  const {colorType, completed, consecutiveDaysCompleted} = props;
  const dotColour = useMemo(
    () => calculateDotColour(colorType, consecutiveDaysCompleted),
    [colorType, consecutiveDaysCompleted],
  );

  return (
    <View
      style={[
        styles(dotColour).dot,
        // completed && styles(dotColour).skippedDot,
        !completed && styles(dotColour).missedDot,
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
    // KEEP: in case we want to implement skipped dots later
    // skippedDot: {
    //   borderWidth: 3,
    //   borderColor: dotColour,
    //   backgroundColor: 'transparent',
    // },
    missedDot: {
      backgroundColor: themeColors.grey[300],
    },
  });
