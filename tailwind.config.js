/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0379E8',
        'background': '#F8F9FB',
        'input': '#E3E9F3',
        'input-bg': '#E3E9F3',
        'secondary': '#0379E8'
      },
      fontSize: {
        'label': '1.1rem',
      },
      boxShadow: {
        'form': '0 4px 6px -1px rgba(230, 224, 224, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
      spacing: {
        'form': '2rem',
        'form-spacing': '2rem',  // Added this line for form group spacing
      },
    },
  },
  plugins: [],
}

