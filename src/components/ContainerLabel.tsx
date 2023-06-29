import React from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import {themeColors} from '@app/theme';

interface ContainerLabelProps {
  text: string;
}

export const ContainerLabel = ({text}: ContainerLabelProps) => {
  return (
    <Text variant={'labelMedium'} style={styles.containerLabel}>
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  containerLabel: {
    marginTop: 15,
    marginBottom: 7,
    marginLeft: 10,
    color: themeColors.grey[800],
    fontWeight: '400',
  },
});
