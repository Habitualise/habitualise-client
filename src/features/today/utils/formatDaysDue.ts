// input: [1, 2, 5, 7]
// output: 'Mon, Tue, Fri, Sun'
// input: [1, 2, 3, 4, 5, 6, 7]
// output: 'Every day'

export function formatDaysDue(days: number[]): string {
  if (days.length === 7) {
    return 'Every day';
  }

  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const formattedDays = days.map(day => daysOfWeek[day - 1]);
  return formattedDays.join(', ');
}
