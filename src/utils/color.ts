import alpha from 'color-alpha';

export const colorAlpha = (color: string, opacity: number) => {
  return alpha(color, opacity);
};
