export interface Habit {
  id: string;
  name: string;
  iconName: string;
  colour: string;
  isCompleted: boolean;
  completionPercentage: number;
  status: 'active' | 'archived';
  daysDue: number[];
  completionHistory: string[]; // DONE, SKIPPED, MISSED - one for each day, last element is the most recent (today)
}
