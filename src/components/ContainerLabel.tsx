import React from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import {useCustomTheme} from '@app/theme/useCustomTheme';

interface ContainerLabelProps {
  text: string;
}

export const ContainerLabel = ({text}: ContainerLabelProps) => {
  const theme = useCustomTheme();

  const styles = StyleSheet.create({
    containerLabel: {
      marginTop: 15,
      marginBottom: 7,
      marginLeft: 10,
      color: theme.colors.grey[800],
      fontWeight: '400',
    },
  });

  return (
    <Text variant={'labelMedium'} style={styles.containerLabel}>
      {text}
    </Text>
  );
};
