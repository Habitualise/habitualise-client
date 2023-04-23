import React, {useMemo} from 'react';
import {View, StyleSheet, ColorValue} from 'react-native';

import {calculateDotColour} from '../utils/calculateDotColour';
import {themeColors} from '@app/theme';

interface DotProps {
  baseColour: string;
  state: string;
  consecutiveDaysCompleted: number;
}

export const Dot = (props: DotProps) => {
  const {baseColour, state, consecutiveDaysCompleted} = props;
  const dotColour = useMemo(
    () => calculateDotColour(baseColour, state, consecutiveDaysCompleted),
    [baseColour, state, consecutiveDaysCompleted],
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
