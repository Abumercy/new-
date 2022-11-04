/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        "short-cyan": "hsl(180, 66%, 49%)",
        "short-light-cyan": "hsl(179, 56%, 75%)",
        "short-dark-violet": "hsl(257, 27%, 26%)",
        "short-red": "hsl(0, 87%, 67%)",
        "short-gray": "hsl(0, 0%, 75%)",
        "short-grayish-violet": "hsl(257, 7%, 63%)",
        "short-very-dark-blue": "hsl(255, 11%, 22%)",
        "short-very-dark-violet": "hsl(260, 8%, 14%)",
        "short-light-gray": "hsl(225deg 33% 95%)",
        "short-red": "hsl(358, 71%, 65%)",
      },
      maxWidth: {
        "3/2": "150%",
      },
      backgroundImage: {
        "shorten-mobile": "url('./dist/images/bg-shorten-mobile.svg')",
        "shorten-desktop": "url('./dist/images/bg-shorten-desktop.svg')",
        "boost-mobile": "url('./dist/images/bg-boost-mobile.svg')",
        "boost-desktop": "url('./dist/images/bg-boost-desktop.svg')",
      },
    },
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"], // fontFamily
    },
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    },
  },
  plugins: [],
};
