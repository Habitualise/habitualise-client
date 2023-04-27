import {LABEL} from '@app/language';
import {themeColors} from '@app/theme';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-paper';

const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

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
      <Text variant="labelMedium" style={styles.repeatLabel}>
        {LABEL.REPEAT}
      </Text>
      <View style={styles.container}>
        {daysOfWeek.map((day, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.dayButton,
              selectedDays[index] && styles.dayButtonSelected,
            ]}
            onPress={() => onDayPress(index)}>
            <Text
              variant="labelSmall"
              style={[
                styles.dayButtonText,
                selectedDays[index] && styles.dayButtonTextSelected,
              ]}>
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
    marginBottom: 8,
    fontWeight: '300',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  dayButton: {
    borderWidth: 1.5,
    borderColor: themeColors.grey[400],
    paddingVertical: 11,
    flex: 1,
    marginHorizontal: 4,
    alignItems: 'center',
    borderRadius: 8,
  },
  dayButtonSelected: {
    borderColor: themeColors.primary,
    backgroundColor: themeColors.primaryContainer,
  },
  dayButtonText: {
    color: themeColors.grey[600],
  },
  dayButtonTextSelected: {
    color: themeColors.primary,
  },
});
