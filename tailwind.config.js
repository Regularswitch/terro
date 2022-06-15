const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-banner': "url('/images/bg-hero-banner.png')",
        'bg-lets': "url('/images/bg-lets.png')",
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        'Dark-Green': '#225439',
        'Light-Green': '#C0E0CC',
        'Light-Pink': '#E4CFEA',
        'Light-Orange': '#EDDFD0',
        'Beige': '#F1E4B2',
        'Lilac': '#F1E4B2',
        'Purple': '#520091',
      },
      fontFamily: {
        Beastly: ["Beastly", ...defaultTheme.fontFamily.sans],
        TTHoves: ["TT-Hoves", ...defaultTheme.fontFamily.sans],
        TTHovesRegular: ["TTHoves-Regular", ...defaultTheme.fontFamily.sans],
        TTHovesBold: ["TTHoves-Bold", ...defaultTheme.fontFamily.sans],
        TTHovesLight: ["TTHoves-Light", ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}
