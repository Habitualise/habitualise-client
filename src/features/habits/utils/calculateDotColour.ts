import {HabitColor} from '@app/context/types';
import {habitColors} from '@app/theme';
import tinygradient from 'tinygradient';

export const calculateDotColour = (
  colorType: HabitColor,
  consecutiveDaysCompleted: number,
): string => {
  const gradient = tinygradient([
    habitColors[colorType].start,
    habitColors[colorType].middle,
    habitColors[colorType].end,
  ]);

  const color = gradient.rgbAt(consecutiveDaysCompleted / 14);
  return color.toRgbString();
};
