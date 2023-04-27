import {HabitColor} from '@app/context/types';
import rgbToHSL from 'rgb-to-hsl';

export const calculateDotColour = (
  baseColour: HabitColor,
  state: string,
  consecutiveDaysCompleted: number,
): string => {
  // validate that baseColour is a valid rgb string
  if (!baseColour.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/)) {
    console.error('Invalid rgb string');
    return 'rgb(0, 0, 0)';
  }

  let [r, g, b] = baseColour.match(/\d+/g)!.map(Number);
  let [h, s, l] = rgbToHSL(r, g, b); // extract the hue value from rgb

  // Start at a pale colour to begin with
  s = 80;
  l = 80;

  const newS = s + consecutiveDaysCompleted * 2;
  const newL = Math.max(l - consecutiveDaysCompleted * 1.5, 40);

  return `hsl(${h}, ${newS}%, ${newL}%)`;
};
