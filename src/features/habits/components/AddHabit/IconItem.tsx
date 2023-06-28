import {customLightThemeColors} from '@app/theme';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const IconItem: React.FC<{
  icon: string;
  selectedIcon: string;
  onIconPress: (icon: string) => void;
}> = ({icon, selectedIcon, onIconPress}) => {
  const isSelected = selectedIcon === icon;

  return (
    <TouchableOpacity
      onPress={() => onIconPress(icon)}
      style={[styles.iconButton, isSelected && styles.iconButtonSelected]}>
      <MaterialCommunityIcons
        name={icon}
        size={24}
        color={isSelected ? 'white' : 'black'}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconButton: {
    padding: 8,
    backgroundColor: customLightThemeColors.grey[300],
    borderRadius: 5,
    margin: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  iconButtonSelected: {
    backgroundColor: customLightThemeColors.primary,
  },
});
