import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Divider, IconButton, Text} from 'react-native-paper';

import PaperView from '@app/components/PaperView';
import {LABEL} from '@app/language';
import {useStore} from '@app/context/StoreContext';
import {Habit} from './Habit';
import {themeColors} from '@app/theme';
import {commonStyles} from '@app/components/styles';

interface HabitScreenProps {
  navigation: any;
}

export const HabitsScreen = ({navigation}: HabitScreenProps) => {
  const [habitActive, setHabitActive] = useState<boolean>(true);
  const {state} = useStore();
  const {habits} = state;

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
                textColor={themeColors.primary}
                onPress={setActive}
                icon="check"
                style={{marginRight: 8}}>
                {LABEL.ACTIVE}
              </Button>
              <Button
                mode={habitActive ? 'contained-tonal' : 'text'}
                textColor={themeColors.primary}
                onPress={setInactive}
                icon="archive">
                {LABEL.ARCHIVED}
              </Button>
            </View>
            <IconButton
              icon="plus"
              iconColor={themeColors.primary}
              onPress={() => navigation.navigate(LABEL.ADD_HABIT_MODAL)}
            />
          </View>
        </View>
        <Divider />
        <ScrollView>
          {habits
            .filter(habit => habit.active === habitActive)
            .map(habit => (
              <Habit
                key={habit.id}
                id={habit.id}
                name={habit.name}
                iconName={habit.iconName}
                colour={habit.colour}
                isCompleted={habit.isCompleted}
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
});
