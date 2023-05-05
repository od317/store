/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors")

module.exports = {
  mode:'jit',
  content: [
    './index.html',
     './src/App.vue',
    './src/assets/base.css',
    './src/**/*.{vue,js}'
  ],
  theme: {
    extend: {
      animation: {
        'gradient-x':'gradient-x 5s linear infinite',
        'trans-x1':'trans-x1 12s linear infinite',
        'trans-x2':'trans-x2 10s linear infinite',
        'trans-x3':'trans-x3 10s  linear infinite',
        's1':'s2 .5s  linear ',
        's2':'s1 .5s  linear ',
        's3':'s3 .5s  linear ',
        's4':'s4 .5s  linear ',



    },
      keyframes: {
        'gradient-x': {
            '0%': {
                'background-size':'200% 200%',
                'background-position': 'left center'
            },
            '50%': {
                'background-size':'200% 200%',
                'background-position': 'right center'
            },'100%': {
              'background-size':'200% 200%',
              'background-position': 'left center'
          },
        },
        'trans-x1': {
            '0%': {
                'transform':'translateX(330%)',
            },
            '100%': {
              'transform':'translateX(-130%)',
          },
        },
        'trans-x2': {
          '0%': {
              'transform':'translateX(430%)',
          },
          '100%': {
            'transform':'translateX(-160%)',
        },
      },
      'trans-x3': {
        '0%': {
            'transform':'translateX(460%)',
        },
        '100%': {
          'transform':'translateX(-130%)',
      },
      },
    
      's1':{
        '0%': {
          'transform':'translateY(0%)',
          'opacity':'1',
          'animation-timing-function':'cubic-bezier(0.8, 0, 1, 1)'
        },
        '100%': {
          'transform':'translateY(140%)',
          'opacity':'0',
          'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)'
        },
      },
      's2':{
        '0%': {
          'transform':'translateX(0%)',
          'opacity':'1',
          'animation-timing-function':'cubic-bezier(0.8, 0, 1, 1)'
        },
        '100%': {
          'transform':'translateX(-140%)',
          'opacity':'0',
           'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)'
        },
      },
      's3':{
        '0%': {
          'transform':'translateY(0%)',
          'animation-timing-function':'cubic-bezier(0.8, 0, 1, 1)'
        },
        '100%': {
          'transform':'translateY(-140%)',
           'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)'
        },
      },
      's4':{
        '0%': {
          'transform':'translateX(0%)',
          'opacity':'1',
          'animation-timing-function':'cubic-bezier(0.8, 0, 1, 1)'
        },
        '100%': {
          'transform':'translateX(140%)',
          'opacity':'0',
          'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)'
        },
      },
    },
      transitionProperty: {
        'width': 'width',

      },
      screens: {
        'sm1': '410px',
        'sm2': '600px',
        'sm3':'1150px',
        'md2':'890px'
      },
      colors:{
        c1:'#00313f',
        c2:'#006a66',
        c3:'#6c4f85',
        gray: {
          900: '#202225',
          800: '#2f3136',
          700: '#36393f',
          600: '#4f545c',
          400: '#d4d7dc',
          300: '#e3e5e8',
          200: '#ebedef',
          100: '#f2f3f5',
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
