export const mockUser = {
  email: 'mrchoy@gmail.com',
  email_verified: true,
  sub: 'auth0|5f2e6f7e6e1c6f0c6c0d6b7d',
};

export const mockHabits = [
  {
    id: 1,
    name: 'Running',
    iconName: 'run',
    colour: 'rgb(66, 135, 245)',
    isCompleted: false,
    completionPercentage: 67,
    status: 'active',
    daysDue: [1, 2, 3, 4, 5, 6, 7],
    completionHistory: [
      'DONE',
      'DONE',
      'DONE',
      'SKIPPED',
      'MISSED',
      'DONE',
      'DONE',
    ],
  },
  {
    id: 2,
    name: 'Yoga',
    iconName: 'yoga',
    colour: 'rgb(245, 179, 66)',
    isCompleted: false,
    completionPercentage: 0,
    status: 'active',
    daysDue: [1, 2, 3, 4, 7],
    completionHistory: ['MISSED', 'MISSED', 'MISSED', 'MISSED', 'MISSED'],
  },
  {
    id: 3,
    name: 'Meditation',
    iconName: 'meditation',
    colour: 'rgb(207, 65, 250)',
    isCompleted: false,
    completionPercentage: 99,
    status: 'active',
    daysDue: [1, 2, 3, 4, 5, 6, 7],
    completionHistory: ['DONE', 'DONE', 'DONE', 'DONE', 'DONE', 'DONE', 'DONE'],
  },
];
