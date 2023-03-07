/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'mobile': { 'max' :'450px'},
    },
    extend: {
      gridTemplateColumns: {
        'gamelists': 'repeat(auto-fit, minmax(400px, 1fr))',
        'mobile': 'repeat(auto-fit, minmax(250px, 1fr))'
      },
      boxShadow: {
        'game': '0px 5px 20px rgba(0,0,0,0.2)',
      },
      colors: {
        'boxshadow': 'rgba(0,0,0,0.5)',
      }
    },
  },
  plugins: [],
}
