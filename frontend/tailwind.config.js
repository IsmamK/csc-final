const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        pause: {
          '0%, 25%': { transform: 'translateX(0)' },  // Pause for a while
          '100%': { transform: 'translateX(-100%)' }, // Then continue
        },
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
        'pause-marquee': 'pause 40s linear infinite', // Animation with a pause
      },
    },
  },
  plugins: [
    flowbite.plugin(),
    require('daisyui'),
    ],
}