import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Switch} from 'react-native-paper';
import {themeColors} from '@app/theme';

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
  return (
    <View style={styles.switcherCard}>
      <View style={styles.rowContainer}>
        <Text style={styles.switcherText}>{label}</Text>
        <Switch onValueChange={onToggleSwitch} value={value} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  switcherCard: {
    marginBottom: 10,
    paddingHorizontal: 15,
    paddingVertical: 8,
    backgroundColor: themeColors.surfaceVariant,
    borderRadius: 10,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  switcherText: {
    fontWeight: '500',
    color: themeColors.grey[900],
  },
});

export default CardSwitcher;
