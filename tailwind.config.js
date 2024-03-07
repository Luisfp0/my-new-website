module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderWidth: {
        19: "19px",
        30: "30px",
      },
      inset: {
        19: "19px",
        29: "30px",
      },
      height: {
        70: "70px",
        66.5: "66.5px",
      },
      width: {
        70: "70px",
        66.5: "66.5px",
      },
      colors: {
        "custom-gray-dark": "#3c3c3c",
        "custom-gray": "#020312",
        "custom-orange": "#d44729",
      },
      screens: {
        md: "992px",
        lg: "1200px",
      },
      keyframes: {
        borderTopAnim: {
          "0%": { width: "0px", height: "0px" },
          "100%": { width: "120px", height: "1px" },
        },
        borderRightAnim: {
          "0%": { width: "0px", height: "0px" },
          "100%": { width: "1px", height: "52px" },
        },
        borderLeftAnim: {
          "0%": { width: "0px", height: "0px" },
          "100%": { width: "1px", height: "52px" },
        },
        borderBottonAnim: {
          "0%": { width: "0px", height: "0px" },
          "100%": { width: "120px", height: "1px" },
        },
        slideDownBorder: {
          "0%": { borderBottomWidth: "0", borderLeftWidth: "0" },
          "100%": {
            borderBottomWidth: "7px",
            borderLeftWidth: "7px",
          },
        },
      },
      animation: {
        borderLeftAnim: "borderLeftAnim 0.5s linear forwards",
        borderTopAnim: "borderTopAnim 0.5s linear forwards",
        borderRightAnim: "borderRightAnim 0.5s linear forwards 0.49s",
        borderBottonAnim: "borderBottonAnim 0.5s linear forwards 0.49s",
        slideDownBorder: "slideDownBorder 0.5s ease forwards 0.6s",
      },
    },
  },
  plugins: [],
};
