module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      head: ['Playfair Display', 'serif'],
      body: ['Nunito', 'Sans-serif']
    }
  },
  variants: {
    extend: {
      translate: ['group-hover']
    },
  },
  plugins: [],
}
