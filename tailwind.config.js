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
            'light-grayish-cyan': '#E7F4EF',
            'very-light-gray': '#f2f2f2',
            'very-dark-grayish-cyan': '#4d6259',
            'dark-cyan': '#10935b',
            'dark-gray': '#888888',
            'dark-moderate-cyan': '#32a674',
            'light-gray': '#D1D1D1',
            'moderate-cyan': '#52b88c',
            'moderate-blue': '#3766C1',
            'very-dark-gray': '#555555',
            'moderate-blue': '#64A8CE',
            'very-soft-blue': '#8496EF',
            'soft-orange': '#F2C44C',
            'soft-yellow': '#E0BF4D',
            'soft-red': '#F36868',
            'soft-red-2': '#E97272',
            'strong-red': '#D30000',
            'very-dark-grayish-yellow': '#6B644B',
            'mostly-desaturated-dark-orange': '#73684C',
            'bright-orange': '#E8B225',
        },
        minHeight: {
            'custom-1': '3rem',
        },
        width: {
            '1/10': '10%',
            '2/10': '20%',
            '2.3/10': '23%',
            '3/10': '30%',
            '4/10': '40%',
            '5/10': '50%',
            '6/10': '60%',
            '7/10': '70%',
            '8/10': '80%',
            '9/10': '90%',
            '3.5/12': '29.166666666666668%',
        },
        height: {
            '1/10': '10%',
            '2/10': '20%',
            '2.3/10': '23%',
            '3/10': '30%',
            '4/10': '40%',
            '5/10': '50%',
            '6/10': '60%',
            '7/10': '70%',
            '8/10': '80%',
            '9/10': '90%',
            '3.5/12': '29.166666666666668%',
        },
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
