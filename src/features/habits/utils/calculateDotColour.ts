export const calculateDotColour = (
  baseColour: string,
  state: string,
  consecutiveDaysCompleted: number,
): string => {
  if (state === 'MISSED') {
    return 'red';
  }
  if (state === 'SKIPPED') {
    return 'gray';
  }

  // validate that baseColour is a valid rgb string
  if (!baseColour.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/)) {
    console.error('Invalid rgb string');
    return 'rgb(0, 0, 0)';
  }

  const [r, g, b] = baseColour.match(/\d+/g)!.map(Number);
  const maxDarkness = 0.9;
  const darkness = Math.min(1 - consecutiveDaysCompleted * 0.1, maxDarkness);
  const newR = Math.round(r * darkness);
  const newG = Math.round(g * darkness);
  const newB = Math.round(b * darkness);

  return `rgb(${newR}, ${newG}, ${newB})`;
};
