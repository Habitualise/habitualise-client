import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
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
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  dayButton: {
    padding: 8,
    backgroundColor: 'lightgray',
    borderRadius: 5,
  },
  dayButtonSelected: {
    backgroundColor: 'blue',
  },
  dayButtonTextSelected: {
    color: 'white',
  },
});
