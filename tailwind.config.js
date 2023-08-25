/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'desktop-header-image': "url('../src/assets/images/pattern-bg-desktop.png')",
        'mobile-header-image': "url('/src/assets/images/pattern-bg-mobile.png')",
      },
      screens: {
        'sm': [
          {'min': '0px', 'max': '500px'}
        ],
        'lg': [
          {'min': '500px'}
        ]
      },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
        rubikMedium: ['Rubik-Medium', 'sans-serif'],
        rubikBold: ['Rubik-Bold', 'sans-serif'],
      },
      borderRadius: {
        'lg': '14px',
      },
      width: {
        'searchsmall': '245px',
        'searchbig': '500px',
        'containerlg': '950px',
      },
      fontSize: {
        'small': ['0.70rem', {
          letterSpacing: '-0.05em',
          fontWeight: '500',
        }]},
    },
  },
  plugins: [],
}

