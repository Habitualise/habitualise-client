import React, {useMemo} from 'react';
import {View, StyleSheet} from 'react-native';

import {calculateDotColour} from '../utils/calculateDotColour';

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

  return <View style={[styles.dot, {backgroundColor: dotColour}]} />;
};

const styles = StyleSheet.create({
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
});
