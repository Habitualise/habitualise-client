import {Habit} from '@app/context/types';

// accepts list of Habits, calculates current day of week and returns list of Habits that are due today
export function getTodaysHabits(habits: Habit[]): Habit[] {
  const today = new Date().getDay();
  return habits.filter(habit => habit.daysDue.includes(today));
}
