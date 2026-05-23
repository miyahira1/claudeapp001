/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#09090B',
        surface: '#18181B',
        border: '#27272A',
        primary: '#6366F1',
        secondary: '#8B5CF6',
        accent: '#06B6D4',
        'text-primary': '#FAFAFA',
        'text-muted': '#A1A1AA',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
