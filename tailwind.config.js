/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
      container: false,
  },
  content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
      screens: {
          xxl: { max: '1450px' },
          xl: { max: '1340px' },
          lg: { max: '1199px' },
          md: { max: '991px' },
          sm: { max: '767px' },
          xs: { max: '575px' },
      },
      extend: {
          fontSize: {
              xxxs: ['12px', { lineHeight: '18px' }],
              xxs: ['14px', { lineHeight: '20px' }],
              xs: ['16px', { lineHeight: '24px' }],
              sm: ['18px', { lineHeight: '28px' }],
              base: ['20px', { lineHeight: '32px' }],
              md: ['24px', { lineHeight: '32px' }],
              lg: ['28px', { lineHeight: '32px' }],
              xl: ['32px', { lineHeight: '38px' }],
          },
          colors: {
              black: {
                  300:'#777980',
                  400:'#4A4C56',
                  500: '#1D1F2C',
                  100: '#462713',
                  700: '#0F1016',
                  900:'#030304',
              },
              gray: {
                  50:'#F0F1F3',
                  100: '#E0E1E3',
                  400: '#858D9D',
                  500: '#667085',
              },
              secondary: {
                50: '#EAF8FF',
                100:'#D5F0FF',
                300: '#80D1FE',
                500: '#2BB2FE',
                600: '#2086BF',
              },
              bodyBg: '#FBFBFB',
          },
          backgroundImage: {
              'title-seprator': "url('/images/title-seprator.svg')",
          },
          boxShadow: {
            'card-shadow': ' 0px 4px 30px 0px rgba(46, 45, 116, 0.05);',
          },
      },
  },
  plugins: [],
}
