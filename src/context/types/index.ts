export interface Habit {
  id: string;
  name: string;
  iconName: string;
  colour: HabitColor;
  isCompleted: boolean;
  completionPercentage: number;
  status: 'active' | 'archived';
  daysDue: number[];
  completionHistory: string[]; // DONE, SKIPPED, MISSED - one for each day, last element is the most recent (today)
}

export type HabitColor =
  | 'red'
  | 'green'
  | 'blue'
  | 'yellow'
  | 'purple'
  | 'orange'
  | 'grey';
