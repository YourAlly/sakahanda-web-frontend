module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        fontFamily: {
            'nunito': ['Nunito Sans'],
            'inter': ['Inter'],
        },
        fontSize: {
            '2xs': '.6rem',
            '3xs': '.5rem',
        },
        colors: {
            'light-grayish-blue': '#f8f8fa',
            'very-light-gray': '#f2f2f2',
            'very-dark-grayish-cyan': '#4d6259',
            'dark-cyan': '#10935b',
            'dark-moderate-cyan': '#32a674',
            'moderate-cyan': '#52b88c',
            'very-dark-gray': '#555555',
        },
        minHeight: {
            'custom-1': '3rem',
        }
    },
  },
  variants: {
    extend: {
        alignItems: ['group-hover', 'hover'],
        borderWidth: ['last'],
        display: ['group-hover', 'hover'],
        flexDirection: ['group-hover', 'hover'],
        fontSize: ['group-hover', 'hover'],
        height: ['group-hover', 'hover'],
        justifyContent: ['group-hover', 'hover'],
        margin: ['group-hover', 'hover'],
        padding: ['group-hover', 'hover'],
        space: ['group-hover', 'hover'],
        textAlign: ['group-hover', 'hover'],
        width: ['group-hover', 'hover'],
    },
  },
  plugins: [],
}
