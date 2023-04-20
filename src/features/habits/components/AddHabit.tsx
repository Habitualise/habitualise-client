import {HabitIcon} from '@/components/HabitIcon';
import {ShadowModal} from '@/components/ShadowModal';
import {LABEL} from '@/language';
import {themeColors} from '@/theme';
import React, {useState} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';

import {IconButton, Text, TextInput} from 'react-native-paper';
import {daySquareStyles} from './DaySquare';

interface AddHabitProps {
  setModalVisible: (value: boolean) => void;
}

const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export const AddHabit = ({setModalVisible}: AddHabitProps) => {
  const [chooseIconVisible, setChooseIconVisible] = useState(false);

  const [selectedDays, setSelectedDays] = useState({
    mon: true,
    tue: true,
    wed: true,
    thu: true,
    fri: true,
    sat: true,
    sun: true,
  });

  const toggleDay = (day: string) => {
    setSelectedDays(prevState => ({
      ...prevState,
      [day]: !prevState[day],
    }));
  };

  return (
    <>
      <ShadowModal
        modalVisible={chooseIconVisible}
        setModalVisible={setChooseIconVisible}
        greyOverlay={false}>
        <IconButton
          icon="close"
          onPress={() => setChooseIconVisible(false)}
          style={styles.closeModalButton}
        />
      </ShadowModal>
      <IconButton
        icon="close"
        onPress={() => setModalVisible(false)}
        style={styles.closeModalButton}
      />
      <Text variant="titleMedium" style={styles.header}>
        {LABEL.ADD_HABIT}
      </Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Pressable onPress={() => setChooseIconVisible(true)}>
          <HabitIcon
            iconName="image-search"
            colour={themeColors.primary}
            style={styles.chooseIconButton}
          />
        </Pressable>
        <TextInput label={LABEL.HABIT_NAME} style={styles.habitNameInput} />
      </View>
      <View style={styles.repeatContainer}>
        <Text variant="bodySmall" style={{marginTop: 16}}>
          {LABEL.REPEAT}
        </Text>
        <View style={styles.dayButtonContainer}>
          {daysOfWeek.map(day => (
            <Pressable onPress={() => toggleDay(day.toLowerCase())} key={day}>
              <View
                style={[
                  daySquareStyles.container,
                  selectedDays[day.toLowerCase()] &&
                    daySquareStyles.completedContainer,
                ]}>
                <Text
                  variant="bodySmall"
                  style={
                    selectedDays[day.toLowerCase()]
                      ? daySquareStyles.completedText
                      : styles.greyDayText
                  }>
                  {day}
                </Text>
              </View>
            </Pressable>
          ))}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  greyDayText: {
    color: themeColors.grey[600],
  },
  dayButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  repeatContainer: {
    marginTop: 16,
    width: '100%',
  },
  header: {
    marginBottom: 26,
  },
  closeModalButton: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  habitNameInput: {
    flex: 1,
  },
  chooseIconButton: {
    aspectRatio: 1,
    width: 55,
  },
});
