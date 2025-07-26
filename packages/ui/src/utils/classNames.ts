export const classNames = (...classNames: (string | undefined)[]) =>
  classNames.filter(Boolean).join(" ");
