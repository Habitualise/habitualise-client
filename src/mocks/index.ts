export const mockUser = {
  email: 'lokchoy@gmail.com',
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
    daysDue: [1, 2, 3, 4, 5, 6],
    lastSevenCompletions: ['2023-02-01', '2023-02-02', '2023-02-03'],
  },
  {
    id: 2,
    name: 'Yoga',
    iconName: 'yoga',
    colour: 'rgb(245, 179, 66)',
    isCompleted: false,
    completionPercentage: 0,
    status: 'active',
    daysDue: [1, 2, 3, 4],
    lastSevenCompletions: [],
  },
  {
    id: 3,
    name: 'Meditation',
    iconName: 'meditation',
    colour: 'rgb(207, 65, 250)',
    isCompleted: false,
    completionPercentage: 99,
    status: 'active',
    daysDue: [0, 1, 2, 3, 4, 5, 6],
    lastSevenCompletions: [
      '2023-02-01',
      '2023-02-02',
      '2023-02-07',
      '2023-02-13',
      '2023-02-15',
      '2023-02-16',
    ],
  },
];
