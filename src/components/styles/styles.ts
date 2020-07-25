const breakpoints = <const>{
  md: 678,
  lg: 1024,
  xl: 1280,
};

const media = <const>{
  md: `(min-width: ${breakpoints.md}px)`,
  lg: `(min-width: ${breakpoints.lg}px)`,
  xl: `(min-width: ${breakpoints.xl}px)`,
};

export { breakpoints, media };
