/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        // 'background': "url('./src/components/assets/background.jpg')"
      },
      colors: {
        'blue-harits': '#007DC7',
        'yellow-rizky': '#FFCF31',
        'blue-harits-dark': '#083D70',
        'brown-gerry': '#514D4D'
      },
    },
  },
  plugins: [],
}
