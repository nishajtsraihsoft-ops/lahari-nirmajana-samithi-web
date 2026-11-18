/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1565C0', // Blue: trust, professionalism, authority
          dark: '#0D47A1',
          light: '#E3F2FD',
          hover: '#1976D2',
        },
        danger: {
          DEFAULT: '#E53935', // Red: highlights, buttons, campaigns
          dark: '#C62828',
          light: '#FFEBEE',
          hover: '#D32F2F',
        },
        success: {
          DEFAULT: '#198754', // Green: health, hope, drug-free society
          dark: '#146c43',
          light: '#E8F5E9',
          hover: '#157347',
        },
        themeRed: {
          DEFAULT: '#E53935',
          dark: '#C62828',
          light: '#FFEBEE',
          hover: '#D32F2F',
        },
        themeBlue: {
          DEFAULT: '#1565C0',
          dark: '#0D47A1',
          light: '#E3F2FD',
          hover: '#1976D2',
        },
        themeGreen: {
          DEFAULT: '#198754',
          dark: '#146c43',
          light: '#E8F5E9',
          hover: '#157347',
        },
      },
      fontFamily: {
        sans: ['Noto Sans Malayalam', 'Anek Malayalam', 'Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        malayalam: ['Noto Sans Malayalam', 'Anek Malayalam', 'Manjari', 'Gayathri', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(21, 101, 192, 0.08), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        'card-hover': '0 12px 30px -4px rgba(21, 101, 192, 0.16), 0 4px 10px -2px rgba(0, 0, 0, 0.06)',
      }
    },
  },
  plugins: [],
}
