// ColorSwatchSelector.tsx
import React, {useEffect, useMemo} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface ColorSwatchSelectorProps {
  selectedColor: string;
  onColorPress: (color: string) => void;
}

export const ColorSwatchSelector: React.FC<ColorSwatchSelectorProps> = ({
  selectedColor,
  onColorPress,
}) => {
  const colors = useMemo(
    () => [
      'rgb(40, 96, 245)', //40	96	246
      'rgb(9, 158, 76)',
      'rgb(255, 190, 0)',
      'rgb(235, 131, 8)',
      'rgb(237, 0, 0)',
      'rgb(156, 39, 176)',
      'rgb(97, 97, 97)',
    ],
    [],
  );

  useEffect(() => {
    if (!selectedColor) {
      onColorPress(colors[0]);
    }
  }, [selectedColor, onColorPress, colors]);

  return (
    <View style={styles.swatchContainer}>
      {colors.map((color, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => onColorPress(color)}
          style={[styles.swatch, {backgroundColor: color}]}>
          {selectedColor === color && (
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
