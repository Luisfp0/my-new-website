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
        "custom-gray": "#333232",
        "custom-orange": "#d44729",
      },
      screens: {
        md: "992px",
        lg: "1200px",
      },
    },
  },
  plugins: [],
};
