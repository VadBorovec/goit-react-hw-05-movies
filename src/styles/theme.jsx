export const theme = Object.freeze({
  colors: {
    accent: '#d32f2f',
    button: '#ff7f50',
    white: '#ffffff',
    gray: '#9e9e9e',
    light: '#f2f2f2',
    dark: '#212121',
    // mainBackground: ['linear-gradient(to bottom, #c9d6ff,  #e2e2e2)'],
    tagBackground: ['linear-gradient(to bottom, #FFD194, #D1913C)'],
    // mainBackground: ['linear-gradient(to bottom, #1a1a1a, #333333)'],
    // mainBackground: ['linear-gradient(to bottom, #d32f2f, #333333)'], #ff7f50
    mainBackground: ['linear-gradient(to bottom, #212121, #1a1a1a, #333333)'],
  },
  fontSizes: {
    small: '14px',
    medium: '18px',
    large: '22px',
  },
  spacing: value => `${4 * value}px`,
  shadows: {
    small: '0 5px 7px -1px rgba(51, 51, 51, 0.23)',
    regular: '0px 4px 10px 4px #9e9e9e',
    medium: '0 9px 47px 11px rgba(51, 51, 51, 0.18);',
  },
  animation: {
    cubicBezier: '0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98)',
  },
});
