import {Habit} from '@app/context/types';

// accepts list of Habits, calculates current day of week and returns list of Habits that are due today
export function getTodaysHabits(habits: Habit[]): Habit[] {
  const dayOfWeek = new Date().getDay();
  const today = dayOfWeek === 0 ? 7 : dayOfWeek; // Map Sunday (0) to 7
  return habits.filter(habit => habit.daysDue.includes(today));
}
