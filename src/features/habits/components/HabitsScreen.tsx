import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Divider, IconButton, Text, useTheme} from 'react-native-paper';

import PaperView from '@app/components/PaperView';
import {LABEL} from '@app/language';
import {useStore} from '@app/context/StoreContext';
import {Habit} from './Habit';
import {commonStyles} from '@app/components/styles';
import Spinner from '@app/components/Spinner';
import {customLightThemeColors} from '@app/theme';

interface HabitScreenProps {
  navigation: any;
}

export const HabitsScreen = ({navigation}: HabitScreenProps) => {
  const [habitActive, setHabitActive] = useState<boolean>(true);
  const {state} = useStore();
  const {loading} = state;
  const {habits} = state;
  const theme = useTheme();

  const setActive = () => {
    setHabitActive(true);
  };

  const setInactive = () => {
    setHabitActive(false);
  };

  return (
    <SafeAreaView
      style={commonStyles.safeArea}
      edges={['top', 'left', 'right']}>
      <PaperView style={{flex: 1}}>
        <View style={commonStyles.headerContainer}>
          <Text variant="headlineLarge" style={styles.heading}>
            {LABEL.HABITS_HEADER}
          </Text>
          <View style={styles.buttonContainer}>
            <View style={styles.buttonGroup}>
              <Button
                mode={habitActive ? 'contained-tonal' : 'text'}
                textColor={theme?.colors.primary}
                onPress={setActive}
                icon="check"
                style={{marginRight: 8}}>
                {LABEL.ACTIVE}
              </Button>
              <Button
                mode={!habitActive ? 'contained-tonal' : 'text'}
                textColor={theme?.colors.primary}
                onPress={setInactive}
                icon="archive">
                {LABEL.ARCHIVED}
              </Button>
            </View>
            <IconButton
              icon="plus"
              iconColor={theme?.colors.primary}
              onPress={() => navigation.navigate(LABEL.ADD_HABIT_MODAL)}
            />
          </View>
        </View>
        <Divider />
        <ScrollView>
          {loading && <Spinner />}
          {!loading && habits.length === 0 && (
            <View style={styles.noHabitsContainer}>
              <Text style={styles.noHabitsLabel}>
                {LABEL.CREATE_HABITS_TO_SEE}
              </Text>
            </View>
          )}
          {habits
            .filter(habit => habit.active === habitActive)
            .map(habit => (
              <Habit
                key={habit.id}
                id={habit.id}
                name={habit.name}
                iconName={habit.iconName}
                colour={habit.colour}
                isCompletedToday={habit.isCompletedToday}
                completionPercentage={habit.completionPercentage}
                active={habit.active}
                completionHistory={habit.completionHistory}
                daysDue={habit.daysDue}
              />
            ))}
        </ScrollView>
      </PaperView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  heading: {
    marginBottom: 5,
    fontWeight: '600',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonGroup: {
    flexDirection: 'row',
  },
  noHabitsContainer: {
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 30,
  },
  noHabitsLabel: {
    color: customLightThemeColors.grey[500],
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
  },
});
