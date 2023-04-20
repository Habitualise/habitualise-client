// adds an alpha channel to the colour to make the background more transparent
export function getBackgroundIconColour(rgbColour: string) {
  // throw error if colour is not rgb
  if (!rgbColour.startsWith('rgb')) {
    throw new Error('Colour must be in rgb format');
  }
  const rgba = rgbColour.replace(')', ', 0.15)').replace('rgb', 'rgba');
  return rgba;
}
