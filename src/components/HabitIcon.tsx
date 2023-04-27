import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {getBackgroundIconColour} from './utils/getBackgroundIconColour';
import {habitColors} from '@app/theme';
import {HabitColor} from '@app/context/types';

interface HabitIconProps {
  iconName: string;
  colour: HabitColor;
  style?: ViewStyle;
}

export const HabitIcon = (props: HabitIconProps) => {
  const {iconName, colour} = props;
  const rgbColor = habitColors[colour].middle;
  return (
    <View
      style={[
        {
          ...styles.iconBackground,
          backgroundColor: getBackgroundIconColour(rgbColor),
        },
        props.style,
      ]}>
      <MaterialCommunityIcons name={iconName} color={rgbColor} size={32} />
    </View>
  );
};

const styles = StyleSheet.create({
  iconBackground: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
    padding: 5,
    borderRadius: 50,
  },
});
