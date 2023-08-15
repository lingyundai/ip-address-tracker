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
    },
  },
  plugins: [],
}

