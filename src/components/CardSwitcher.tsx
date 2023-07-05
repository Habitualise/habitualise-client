import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Switch} from 'react-native-paper';
import {useCustomTheme} from '@app/theme/useCustomTheme';

interface CardSwitcherProps {
  label: string;
  onToggleSwitch: (value: boolean) => void;
  isRedText?: boolean;
  value: boolean;
}

const CardSwitcher: React.FC<CardSwitcherProps> = ({
  label,
  onToggleSwitch,
  value,
}) => {
  const theme = useCustomTheme();

  const styles = StyleSheet.create({
    switcherCard: {
      marginBottom: 10,
      paddingHorizontal: 15,
      paddingVertical: 10,
      backgroundColor: theme.colors.surfaceVariant,
      borderRadius: 10,
    },
    rowContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    switcherText: {
      fontWeight: '500',
      color: theme.colors.grey[900],
    },
  });

  return (
    <View style={styles.switcherCard}>
      <View style={styles.rowContainer}>
        <Text style={styles.switcherText}>{label}</Text>
        <Switch onValueChange={onToggleSwitch} value={value} />
      </View>
    </View>
  );
};

export default CardSwitcher;
