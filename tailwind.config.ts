import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        sand: {
          50: "#fbf7f1",
          100: "#f4ebdf",
          200: "#eadbc5",
          300: "#dcc6a6",
        },
        sage: {
          100: "#dde6df",
          300: "#9db4a3",
          500: "#64846f",
          700: "#476150",
        },
        clay: {
          100: "#f7d8c8",
          300: "#df9b78",
          500: "#bf6d48",
          700: "#8d4b2f",
        },
        ink: {
          50: "#f4f2ef",
          100: "#e8e1d8",
          300: "#a39480",
          600: "#5f5549",
          900: "#231f1a",
        },
      },
      fontFamily: {
        sans: ['"Avenir Next"', '"Segoe UI"', '"Helvetica Neue"', "sans-serif"],
        display: [
          '"Iowan Old Style"',
          '"Palatino Linotype"',
          '"Book Antiqua"',
          "serif",
        ],
      },
      boxShadow: {
        soft: "0 28px 70px -30px rgba(67, 49, 33, 0.28)",
      },
      backgroundImage: {
        "page-wash":
          "radial-gradient(circle at top left, rgba(191, 109, 72, 0.22), transparent 32%), radial-gradient(circle at 85% 15%, rgba(100, 132, 111, 0.18), transparent 28%), linear-gradient(180deg, #fbf7f1 0%, #f4ebdf 100%)",
      },
      maxWidth: {
        prosewide: "72ch",
      },
    },
  },
  plugins: [],
};

export default config;
