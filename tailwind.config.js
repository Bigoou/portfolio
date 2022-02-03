module.exports = {
  mode: 'jit',
  content: ["*.{html,js}"],
  theme: {
      backgroundImage: {
        'bg': "url('./img/background.webp')",
        'benef': "url('./img/background-benef.png')",
        'bnfmobile':"url('./img/bg-benef-mobile.png')",
      },
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui'],
        'serif': ['ui-serif', 'Georgia'],
        'mono': ['ui-monospace', 'SFMono-Regular'],
        'poppins' : ['Poppins'],
        'franklin' : ['Libre Franklin']
      },
    extend: {
      top: {
        "10v": "10vh",
        "20v": "20vh",
        "30v": "30vh",
        "40v": "40vh",
        "50v": "50vh",
        "60v": "60vh",
        "70v": "70vh",
        "80v": "80vh",
        "90v": "90vh",
        "100v": "100vh",
      },
      blur: {
        '8xl': '80px',
      },
      spacing: {
        '144': '56rem',
      },
      inset: {
        '3/5': '',
      },
      keyframes: {
        wiggle: {
            '0%, 100%': {
                transform: 'translateY(0%)'
            },
            '50%': {
                transform: 'translateY(-2%)'
            },
        },
        wiggle2: {
          '0%, 100%': {
              transform: 'translateY(0%)'
          },
          '50%': {
              transform: 'translateY(-100%)'
          },
      }
    },
    animation: {
        wiggle: 'wiggle 2s ease-in-out infinite',
        wiggle2: 'wiggle 2s ease-in-out infinite',
    }
    },
  },
  plugins: [],
}
