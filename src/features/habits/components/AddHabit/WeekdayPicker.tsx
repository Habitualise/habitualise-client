import {themeColors} from '@app/theme';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-paper';

const daysOfWeek = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

interface WeekdayPickerProps {
  selectedDays: boolean[];
  onDayPress: (index: number) => void;
}

export const WeekdayPicker: React.FC<WeekdayPickerProps> = ({
  selectedDays,
  onDayPress,
}) => {
  return (
    <>
      <Text style={styles.repeatLabel}>REPEAT</Text>
      <View style={styles.container}>
        {daysOfWeek.map((day, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.dayButton,
              selectedDays[index] && styles.dayButtonSelected,
            ]}
            onPress={() => onDayPress(index)}>
            <Text style={selectedDays[index] && styles.dayButtonTextSelected}>
              {day}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  fence: {
    paddingVertical: 12,
  },
  repeatLabel: {
    marginLeft: 4,
    marginBottom: 4,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dayButton: {
    padding: 10,
    flex: 1,
    marginHorizontal: 4,
    alignItems: 'center',
    backgroundColor: themeColors.grey[200],
    borderRadius: 8,
  },
  dayButtonSelected: {
    backgroundColor: themeColors.primary,
  },
  dayButtonTextSelected: {
    color: 'white',
  },
});
