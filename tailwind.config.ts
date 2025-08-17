import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        wtw: {
          purple: '#6B3FA0',
          purpleDark: '#4F2E78'
        }
      },
      borderRadius: {
        '2xl': '1rem'
      },
      boxShadow: {
        soft: '0 6px 24px rgba(0,0,0,0.06)'
      }
    }
  },
  plugins: []
}
export default config
