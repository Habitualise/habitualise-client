export interface IHabit {
  id: number;
  name: string;
  iconName: string;
  colour: string;
  isCompleted: boolean;
  completionPercentage: number;
  status: 'active' | 'archived';
  daysDue: number[];
  lastSevenCompletions: string[]; // ISO date strings for the last 7 days that were completed (or less if the habit is new) - 0 = Sunday
}

export interface IState {
  habits: IHabit[];
}
