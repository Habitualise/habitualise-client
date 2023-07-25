import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useCustomTheme} from '@app/theme/useCustomTheme';

export const IconItem: React.FC<{
  icon: string;
  selectedIcon: string;
  onIconPress: (icon: string) => void;
}> = ({icon, selectedIcon, onIconPress}) => {
  const theme = useCustomTheme();

  const styles = StyleSheet.create({
    iconButton: {
      padding: 8,
      backgroundColor: theme.colors.grey[200],
      borderRadius: 5,
      margin: 8,
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },
    iconButtonSelected: {
      backgroundColor: theme.colors.primary,
    },
  });

  const isSelected = selectedIcon === icon;

  return (
    <TouchableOpacity
      onPress={() => onIconPress(icon)}
      style={[styles.iconButton, isSelected && styles.iconButtonSelected]}>
      <MaterialCommunityIcons
        name={icon}
        size={24}
        color={isSelected ? theme.colors.grey[50] : theme.colors.grey[900]}
      />
    </TouchableOpacity>
  );
};
