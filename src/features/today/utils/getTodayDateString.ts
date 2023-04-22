export default function getTodayDateString(): string {
  const today = new Date();
  // in the form Monday 5 December
  return today.toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  });
}
