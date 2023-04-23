declare module 'rgb-to-hsl' {
  type RgbToHsl = (r: number, g: number, b: number) => [number, number, number];

  const rgbToHSL: RgbToHsl;

  export default rgbToHSL;
}
