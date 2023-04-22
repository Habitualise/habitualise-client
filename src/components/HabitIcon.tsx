import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {getBackgroundIconColour} from './utils/getBackgroundIconColour';

interface HabiticonProps {
  iconName: string;
  colour: string;
  style?: ViewStyle;
}

export const HabitIcon = (props: HabiticonProps) => {
  const {iconName, colour} = props;
  return (
    <View
      style={[
        {
          ...styles.iconBackground,
          backgroundColor: getBackgroundIconColour(colour),
        },
        props.style,
      ]}>
      <MaterialCommunityIcons name={iconName} color={colour} size={32} />
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
