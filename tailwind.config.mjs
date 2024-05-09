/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'body': ['Metropolis']
      },
      colors: {
        primary: {
          100: '#8989A2',
          200: '#160637'
        },
        secondary: {
          100: '#F9F0FF',
          200: '#722ED1'
        }
      },
      keyframes: {
        "slide-in": {
          "0%": {
            "-webkit-transform": "translateX(120%)",
            transform: "translateX(120%)",
          },
          "100%": {
            "-webkit-transform": "translateX(0%)",
            transform: "translateX(0%)",
          },
        },
      },
      animation: {
        "slide-in": "slide-in .2s ease-out",
      },
    },
  },
	plugins: [],
}
