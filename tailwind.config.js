module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        height: "height",
        width: "width",
      },
      transitionDuration: {
        2000: "2000ms",
      },
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
        borderTopTwoAnim: {
          "0%": { width: "0px", height: "2px" },
          "100%": { width: "160px", height: "2px" },
        },
        borderRightTwoAnim: {
          "0%": { width: "2px", height: "0px" },
          "100%": { width: "2px", height: "56px" },
        },
        borderLeftTwoAnim: {
          "0%": { width: "2px", height: "0px" },
          "100%": { width: "2px", height: "56px" },
        },
        borderBottonTwoAnim: {
          "0%": { width: "0px", height: "2px" },
          "100%": { width: "160px", height: "2px" },
        },
        slideDownTwoBorder: {
          "0%": { borderBottomWidth: "0", borderLeftWidth: "0" },
          "100%": {
            borderBottomWidth: "9px",
            borderLeftWidth: "9px",
          },
        },
        borderTopRight: {
          "0%": { width: "0%", height: "0" },
          "50%": { width: "100%", height: "0" },
          "100%": { width: "100%", height: "100%" },
        },
        borderBottomLeft: {
          "0%": { width: "0%", height: "0" },
          "50%": { width: "100%", height: "0" },
          "100%": { width: "100%", height: "100%" },
        },
      },
      animation: {
        borderLeftAnim: "borderLeftAnim 0.5s linear forwards",
        borderTopAnim: "borderTopAnim 0.5s linear forwards",
        borderRightAnim: "borderRightAnim 0.5s linear forwards 0.49s",
        borderBottonAnim: "borderBottonAnim 0.5s linear forwards 0.49s",
        borderLeftTwoAnim: "borderLeftTwoAnim 0.5s linear forwards",
        borderTopTwoAnim: "borderTopTwoAnim 0.5s linear forwards",
        borderRightTwoAnim: "borderRightTwoAnim 0.5s linear forwards 0.49s",
        borderBottonTwoAnim: "borderBottonTwoAnim 0.5s linear forwards 0.49s",
        slideDownBorder: "slideDownBorder 0.5s ease forwards 0.6s",
        fullWidthAnim: "fullWidthAnim 1s linear forwards",
        eightWidthAnim: "eightWidthAnim 1s linear forwards",
        ninetyWidthAnim: "ninetyWidthAnim 1s linear forwards",
        sixtyWidthAnim: "sixtyWidthAnim 1s linear forwards",
        boxSlideFull: "boxSlideFull 1s linear forwards",
        boxSlideEighty: "boxSlideEighty 1s linear forwards",
        boxSlideNinety: "boxSlideNinety 1s linear forwards",
        boxSlideSixty: "boxSlideSixty 1s linear forwards",
        bounceSlow: "bounce 3s linear infinite",
      },
    },
  },
  plugins: [],
};
