import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Divider, Text} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';

import {LABEL} from '@app/language';
import getTodayDateString from '../utils/getTodayDateString';
import {TodayHabit} from './TodayHabit';
import {useStore} from '@app/context/StoreContext';
import PaperView from '@app/components/PaperView';

export const TodayScreen = () => {
  const {state} = useStore();
  const todaysHabits = state.habits;

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
      edges={['top', 'left', 'right']}>
      <PaperView style={{flex: 1}}>
        <View style={styles.headerContainer}>
          <Text variant="bodySmall">{getTodayDateString()}</Text>
          <Text variant="headlineLarge" style={styles.heading}>
            {LABEL.TODAY_HEADER}
          </Text>
        </View>
        <Divider />
        <ScrollView>
          {todaysHabits.map(habit => (
            <TodayHabit
              key={habit.id}
              id={habit.id}
              iconName={habit.iconName}
              name={habit.name}
              isCompleted={habit.isCompleted}
              daysDue={habit.daysDue}
              colour={habit.colour}
            />
          ))}
        </ScrollView>
      </PaperView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  heading: {
    fontWeight: '600',
  },
});
