/**
 * Returns a rgba colour string for the background of an icon
 * Adds opacity to the colour
 */
export function getBackgroundIconColour(rgbColour: string) {
  // throw error if colour is not rgb
  if (!rgbColour.startsWith('rgb')) {
    throw new Error('Colour must be in rgb format');
  }
  const rgba = rgbColour.replace(')', ', 0.15)').replace('rgb', 'rgba');
  return rgba;
}
