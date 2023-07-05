import React, {useContext} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-paper';
import {useCustomTheme} from '@app/theme/useCustomTheme';
import {PreferencesContext} from '@app/context/PreferencesContext';

const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

interface WeekdayPickerProps {
  selectedDays: boolean[];
  onDayPress: (index: number) => void;
}

export const WeekdayPicker: React.FC<WeekdayPickerProps> = ({
  selectedDays,
  onDayPress,
}) => {
  const theme = useCustomTheme();
  const {isThemeDark} = useContext(PreferencesContext);

  const styles = StyleSheet.create({
    fence: {
      paddingVertical: 12,
    },
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 16,
    },
    dayButton: {
      borderWidth: 1.5,
      borderColor: theme.colors.grey[400],
      paddingVertical: 11,
      flex: 1,
      marginHorizontal: 4,
      alignItems: 'center',
      borderRadius: 8,
    },
    dayButtonSelected: {
      borderColor: theme.colors.primary,
      backgroundColor: isThemeDark
        ? 'transparent'
        : theme.colors.primaryContainer,
    },
    dayButtonText: {
      color: theme.colors.grey[600],
    },
    dayButtonTextSelected: {
      color: theme.colors.primary,
    },
  });

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
  );
};
