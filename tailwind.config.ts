import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Georgia', 'Times New Roman', 'Times', 'serif'],
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      colors: {
        background: '#fefefe',
        foreground: '#2c2c2c',
        accent: {
          primary: '#d4735b',
          secondary: '#8b6914',
        },
        neutral: {
          warm: '#f8f6f3',
          cool: '#f5f5f4',
        },
        text: {
          muted: '#6b7280',
        },
        border: {
          subtle: '#e5e7eb',
        }
      },
      spacing: {
        'section': '6rem',
        'component': '2rem',
      },
      borderRadius: {
        'card': '12px',
      },
      boxShadow: {
        'elegant': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'hover': '0 10px 25px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      },
    },
  },
  plugins: [],
}
export default config
