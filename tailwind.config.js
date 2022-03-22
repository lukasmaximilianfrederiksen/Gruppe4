module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-white": "#fbfbfb",
        "primary-green": "#99bea1",
        "primary-green-light": "#b7d1bd",
        ghost: "#6b7788",
        "secondary-red": "#e17f7b",
        "secondary-red-light": "#eaa6a3",
        "heading-color-primary": "#181818",
        "paragraph-color-primary": "#363434",
        "overlay-popup-grey": "rgba(69,69,69,0.5",
      },

      fontFamily: {
        poppins: "'Poppins', sans serif",
        serif: "'Source Serif Pro', serif",
      },

      fontSize: {
        "fluid-h1": "clamp(86.05px, 1.83vw + 78.72px, 102.19px)",
        "fluid-h2": "clamp(61.47px, 1.31vw + 56.23px, 72.99px)",
        "fluid-h3": "clamp(43.9px, 0.94vw + 40.16px, 52.14px)",
        "fluid-h4": "clamp(31.36px, 0.67vw + 28.69px, 37.24px)",

        "fluid-paragraph-large": "clamp(22.4px, 0.48vw + 20.49px, 26.6px)",
        "fluid-paragraph-base": "clamp(16px, 0.34vw + 14.64px, 19px)",
        "fluid-paragraph-small": "clamp(11.43px, 0.24vw + 10.45px, 13.57px)",

        "fluid-xxxlarge": [
          "clamp(86.05px, 1.83vw + 78.72px, 102.19px)",
          { lineHeight: "1.1rem" },
        ],

        maxWidth: {
          readable: "60ch",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
