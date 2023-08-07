import React, {useMemo} from 'react';
import {ColorValue, StyleSheet, View} from 'react-native';

import {calculateDotColour} from '../utils/calculateDotColour';
import {HabitColor} from '@app/context/types';
import {useCustomTheme} from '@app/theme/useCustomTheme';

interface DotProps {
  colorType: HabitColor;
  completed: boolean;
  consecutiveDaysCompleted: number;
}

export const Dot = (props: DotProps) => {
  const theme = useCustomTheme();

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
        backgroundColor: theme.colors.grey[300],
      },
    });

  const {colorType, completed, consecutiveDaysCompleted} = props;
  const dotColour = useMemo(
    () =>
      calculateDotColour(
        colorType,
        consecutiveDaysCompleted,
        theme.colors.habitColorGradients,
      ),
    [colorType, consecutiveDaysCompleted, theme.colors.habitColorGradients],
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
