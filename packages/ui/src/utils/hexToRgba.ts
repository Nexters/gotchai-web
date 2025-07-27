export const hexToRgba = (hex: `#${string}`, opacity: number) => {
  return `${hexToRgb(hex)}, ${opacity}`;
};

export const hexToRgb = (hex: `#${string}`) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return `${r}, ${g}, ${b}`;
};
