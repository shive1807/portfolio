import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#080808',
        surface: '#0f0f0f',
        'surface-2': '#161616',
        text: '#efefef',
        muted: '#6b6b6b',
        accent: '#D4FF58',
      },
      fontFamily: {
        display: ['var(--font-space-grotesk)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      letterSpacing: {
        ultra: '0.4em',
        widest: '0.25em',
      },
    },
  },
  plugins: [],
}

export default config
