const size = {
  mobile: "600px",
  tablet: "600px",
  laptop: "992px",
  desktop: "1200px",
};

export const device = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`,
};
