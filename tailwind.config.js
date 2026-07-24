/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        'serif-display': ['"Instrument Serif"', 'Georgia', 'serif'],
      },
      colors: {
        base: '#0a0a0a',
        panel: '#111113',
        card: '#212121',
        line: 'rgba(255,255,255,0.08)',
        primary: '#f4f4f5',
        accent: {
          DEFAULT: '#ff5c1c',
          dim: '#ff7a45',
        },
      },
    },
  },
  plugins: [],
}
