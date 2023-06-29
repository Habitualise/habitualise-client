import React from 'react';
import {ScrollView, View} from 'react-native';
import {Divider, Text} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';

import {LABEL} from '@app/language';
import getTodayDateString from '../utils/getTodayDateString';
import {TodayHabit} from './TodayHabit';
import {useStore} from '@app/context/StoreContext';
import PaperView from '@app/components/PaperView';
import {commonStyles} from '@app/components/styles';
import {getTodaysHabits} from '@app/features/today/utils/getTodaysHabits';
import Spinner from '@app/components/Spinner';
import {themeColors} from '@app/theme';

export const TodayScreen = () => {
  const {state} = useStore();
  const {loading} = state;
  const allHabits = state.habits;
  const todaysHabits = getTodaysHabits(allHabits);

  return (
    <SafeAreaView
      style={commonStyles.safeArea}
      edges={['top', 'left', 'right']}>
      <PaperView style={{flex: 1}}>
        <View style={commonStyles.headerContainer}>
          <Text variant="bodySmall">{getTodayDateString()}</Text>
          <Text variant="headlineLarge" style={commonStyles.heading}>
            {LABEL.TODAY_HEADER}
          </Text>
        </View>
        <Divider />
        <ScrollView>
          {loading && <Spinner />}
          {!loading && todaysHabits.length === 0 && (
            <View style={styles.noHabitsContainer}>
              <Text style={styles.noHabitsLabel}>
                {LABEL.NO_HABITS_FOR_TODAY}
              </Text>
            </View>
          )}
          {todaysHabits.map(habit => (
            <TodayHabit
              key={habit.id}
              id={habit.id}
              iconName={habit.iconName}
              name={habit.name}
              isCompletedToday={habit.isCompletedToday}
              daysDue={habit.daysDue}
              colour={habit.colour}
            />
          ))}
        </ScrollView>
      </PaperView>
    </SafeAreaView>
  );
};

const styles = {
  noHabitsContainer: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  noHabitsLabel: {
    color: themeColors.grey[500],
    fontSize: 16,
  },
};
