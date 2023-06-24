export interface Habit {
  id: string;
  name: string;
  iconName: string;
  colour: HabitColor;
  isCompletedToday: boolean; //
  completionPercentage: number;
  active: boolean;
  daysDue: number[]; // 1 = Monday, 2 = Tuesday, etc.
  completionHistory: boolean[]; // DONE, SKIPPED, MISSED - one for each day, last element is the most recent (today)
}

export type HabitColor =
  | 'red'
  | 'green'
  | 'blue'
  | 'yellow'
  | 'purple'
  | 'orange'
  | 'grey';

export interface UserBE {
  name: string;
}
