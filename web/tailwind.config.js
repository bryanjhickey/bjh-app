// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          50: '#edf1ff',
          100: '#838b98',
          200: '#545f73',
          300: '#434f65',
          400: '#344058',
          500: '#222e44',
          600: '#1f283a',
          700: '#1b2331',
          800: '#151b25',
          900: '#12171f',
        },
        purple: {
          50: '#ffccfa',
          100: '#eb96e2',
          200: '#d767cb',
          300: '#c640b7',
          400: '#b51fa3',
          500: '#801073',
          600: '#590950',
          700: '#3b0736',
          800: '#260623',
          900: '#170515',
        },
        red: {
          50: '#fcdcd9',
          100: '#e59189',
          200: '#d2584a',
          300: '#d64533',
          400: '#db311b',
          500: '#b51906',
          600: '#970f00',
          700: '#820c00',
          800: '#6e0a00',
          900: '#590700',
        },
        yellow: {
          50: '#ffe7ba',
          100: '#fed07b',
          200: '#fdb83c',
          300: '#ffa300',
          400: '#d88b00',
          500: '#a26900',
          600: '#a26900',
          700: '#583a00',
          800: '#3f2a00',
          900: '#2b1d00',
        },
      },
      fontFamily: {
        sans: ['Gotham Pro', ...defaultTheme.fontFamily.sans],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
