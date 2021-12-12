module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        ja: ['Noto Sans JP', '游ゴシック', 'Yu Gothic', '游ゴシック体'],
        en: ['Roboto', 'arial', 'sans-serif'],
      },
      colors: {
        light: '#ddd',
        dark: '#333',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
