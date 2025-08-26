/** @type {import('tailwindcss').Config} */
module.exports = {
content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#555879',
        'primary-medium': '#98A1BC',
        'accent-warm': '#DED3C4',
        'background': '#F4EBD3',
        'action-green': '#7A9E7E',
        'attention-orange': '#D4A77D'
      }
    },
  },
  plugins: [],
}