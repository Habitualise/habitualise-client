export interface Habit {
  id: string;
  name: string;
  iconName: string;
  colour: HabitColor;
  isCompleted: boolean;
  completionPercentage: number;
  active: boolean;
  daysDue: number[];
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
