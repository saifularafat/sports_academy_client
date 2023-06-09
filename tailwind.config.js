/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'name': ['font-name'],
      },
      colors: {
        'main_color': '#173931',
        'color-btn': '#FF3811',
        'title-color': '#151515',
        'description-color': '#737373',
        'second-title': '#444444',
      },
      backgroundImage: {
        'signUpImage': "url('./src/assets/dot_circle.png')",
        'trainerBanner': "url('./src/assets/slider/trainer-banner.jpg')",
      }
    },
    darkMode: 'class',
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "light",
      "dark",
    ],
  },
}