module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "redder": "#630A10",
        "base": "#EFEFEF"
      },
      boxShadow: {
        "custom-2": "-18px 18px 36px #d1d1d1, 18px -18px 36px #ffffff;",
        "custom": "-14px 14px 28px #e8e8e8, 14px -14px 28px #ffffff;"
      },
    },
    fontFamily: {
      head: ["Playfair Display", "serif"],
      body: ["Nunito", "Sans-serif"],
    },
  },
  variants: {
    extend: {
      translate: ["group-hover"],
      scale: ["group-hover"]
    },
  },
  plugins: [],
};
