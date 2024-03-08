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
        sm: "768px",
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
          "100%": { width: "1px", height: "59px" },
        },
        borderLeftAnim: {
          "0%": { width: "0px", height: "0px" },
          "100%": { width: "1px", height: "60px" },
        },
        borderBottonAnim: {
          "0%": { width: "0px", height: "0px" },
          "100%": { width: "121px", height: "1px" },
        },
        slideDownBorder: {
          "0%": { borderBottomWidth: "0", borderLeftWidth: "0" },
          "100%": {
            borderBottomWidth: "9px",
            borderLeftWidth: "9px",
          },
        },
        fullWidthAnim: {
          "0%": { width: "0px", height: "2px" },
          "100%": { width: "95%", height: "2px" },
        },
        eightWidthAnim: {
          "0%": { width: "0px", height: "2px" },
          "100%": { width: "80%", height: "2px" },
        },
        ninetyWidthAnim: {
          "0%": { width: "0px", height: "2px" },
          "100%": { width: "90%", height: "2px" },
        },
        sixtyWidthAnim: {
          "0%": { width: "0px", height: "2px" },
          "100%": { width: "60%", height: "2px" },
        },
        boxSlideFull: {
          "0%": { right: '550px' },
          "100%": { right: '45px' },
        },
        boxSlideEighty: {
          "0%": { right: '550px' },
          "100%": { right: '125px' },
        },
        boxSlideNinety: {
          "0%": { right: '550px' },
          "100%": { right: '70px' },
        },
        boxSlideSixty: {
          "0%": { right: '550px' },
          "100%": { right: '230px' },
        },
      },
      animation: {
        borderLeftAnim: "borderLeftAnim 0.5s linear forwards",
        borderTopAnim: "borderTopAnim 0.5s linear forwards",
        borderRightAnim: "borderRightAnim 0.5s linear forwards 0.49s",
        borderBottonAnim: "borderBottonAnim 0.5s linear forwards 0.49s",
        slideDownBorder: "slideDownBorder 0.5s ease forwards 0.6s",
        fullWidthAnim: "fullWidthAnim 1s linear forwards",
        eightWidthAnim: "eightWidthAnim 1s linear forwards",
        ninetyWidthAnim: "ninetyWidthAnim 1s linear forwards",
        sixtyWidthAnim: "sixtyWidthAnim 1s linear forwards",
        boxSlideFull: "boxSlideFull 1s linear forwards",
        boxSlideEighty: "boxSlideEighty 1s linear forwards",
        boxSlideNinety: "boxSlideNinety 1s linear forwards",
        boxSlideSixty: "boxSlideSixty 1s linear forwards",
      },
    },
  },
  plugins: [],
};
