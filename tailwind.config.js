/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {


    extend: {
      colors: {
        'mainbg': "#D1D2D4",
        'mainblack': "#101010",
        'mainff': "#FFFFFF",
        'buttonHover': "#404040"
      },
    }
  },
  plugins: []
};