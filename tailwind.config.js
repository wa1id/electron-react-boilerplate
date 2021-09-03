import colors from 'tailwindcss/colors';

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        sky: colors.sky,
        cyan: colors.cyan,
      },
    },
    fontFamily: {
      sans: ['Proxima Nova', 'system-ui'],
      serif: ['Proxima Nova', 'system-ui'],
      mono: ['Proxima Nova', 'system-ui'],
      display: ['Proxima Nova', 'system-ui'],
      body: ['Proxima Nova', 'system-ui'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
