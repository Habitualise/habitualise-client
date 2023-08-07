import {HabitColor} from '@app/context/types';
import React, {useEffect} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useCustomTheme} from '@app/theme/useCustomTheme';

interface ColorSwatchSelectorProps {
  selectedColor: HabitColor;
  onColorPress: (color: HabitColor) => void;
}

export const ColorSwatchSelector: React.FC<ColorSwatchSelectorProps> = ({
  selectedColor,
  onColorPress,
}) => {
  const theme = useCustomTheme();
  const colorTypes = Object.keys(
    theme.colors.habitColorGradients,
  ) as HabitColor[];

  useEffect(() => {
    if (!selectedColor) {
      onColorPress(colorTypes[0]);
    }
  }, [colorTypes, onColorPress, selectedColor]);

  return (
    <View style={styles.swatchContainer}>
      {colorTypes.map((colorType, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => onColorPress(colorType)}
          style={[
            styles.swatch,
            {
              backgroundColor:
                theme.colors.habitColorGradients[colorType].middle,
            },
          ]}>
          {selectedColor === colorType && (
            <MaterialCommunityIcons name="check" size={24} color="white" />
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  swatchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom: 16,
  },
  swatch: {
    flex: 1,
    aspectRatio: 1,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 3,
  },
});
