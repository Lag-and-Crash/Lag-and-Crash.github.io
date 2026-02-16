/** @type {import('tailwindcss').Config} */
/* eslint-disable */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'mono': "JetBrains Mono",
      'sans': ['Montserrat', 'system-ui', 'sans-serif']
    },
    extend: {
      colors: {
        // Cosmic Background System
        'cosmic-base': '#05070D',
        'cosmic-depth': '#0A0F1C',
        'cosmic-panel': '#111827',
        
        // Atmospheric Blue
        'cosmic-blue': {
          deep: '#1E40AF',
          mid: '#2563EB',
          light: '#60A5FA',
          glow: 'rgba(96, 165, 250, 0.18)'
        },
        
        // Atmospheric Red
        'cosmic-red': {
          deep: '#7F1D1D',
          mid: '#B91C1C',
          light: '#F87171',
          glow: 'rgba(248, 113, 113, 0.18)'
        },
        
        // Text System
        'cosmic-text': {
          primary: '#E5E7EB',
          secondary: '#94A3B8',
          muted: '#64748B'
        },
        
        // Legacy (for gradual migration)
        'highlight': '#60A5FA',
      },
      
      backgroundImage: {
        'gradient-cosmic': 'linear-gradient(135deg, rgba(96, 165, 250, 0.1) 0%, rgba(248, 113, 113, 0.1) 100%)',
        'gradient-cosmic-reverse': 'linear-gradient(135deg, rgba(248, 113, 113, 0.1) 0%, rgba(96, 165, 250, 0.1) 100%)',
      },
      
      boxShadow: {
        'depth': '0 8px 32px rgba(0, 0, 0, 0.4)',
        'depth-lg': '0 16px 48px rgba(0, 0, 0, 0.6)',
      },
      
      animation: {
        'nebulaDriftSlow': 'nebulaDriftSlow 140s ease-in-out infinite',
        'nebulaDriftMedium': 'nebulaDriftMedium 110s ease-in-out infinite',
        'terminalBlink': 'terminalBlink 1.2s step-end infinite',
        'fadeIn': 'fadeIn 0.6s ease-out',
        'slideUp': 'slideUp 0.6s ease-out',
      },
      
      keyframes: {
        nebulaDriftSlow: {
          '0%': { transform: 'translate3d(0%, 0%, 0) scale(1)' },
          '33%': { transform: 'translate3d(-8%, 12%, 0) scale(1.08)' },
          '66%': { transform: 'translate3d(5%, -10%, 0) scale(0.95)' },
          '100%': { transform: 'translate3d(0%, 0%, 0) scale(1)' },
        },
        nebulaDriftMedium: {
          '0%': { transform: 'translate3d(0%, 0%, 0) scale(1) rotate(0deg)' },
          '50%': { transform: 'translate3d(10%, -8%, 0) scale(1.1) rotate(2deg)' },
          '100%': { transform: 'translate3d(0%, 0%, 0) scale(1) rotate(0deg)' },
        },
        terminalBlink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      
      transitionDuration: {
        '2000': '2000ms',
        '3000': '3000ms',
      },
    },
  },
  plugins: [],
}
