import {HabitColor} from '@app/context/types';
import tinygradient from 'tinygradient';
import {HabitColorGradients} from '@app/theme/types';

export const calculateDotColour = (
  colorType: HabitColor,
  consecutiveDaysCompleted: number,
  habitColorGradients: HabitColorGradients,
): string => {
  const gradient = tinygradient([
    habitColorGradients[colorType].start,
    habitColorGradients[colorType].middle,
    habitColorGradients[colorType].end,
  ]);

  const color = gradient.rgbAt(consecutiveDaysCompleted / 14);
  return color.toRgbString();
};
