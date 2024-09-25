/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        whitesmoke: {
          "100": "#f9fafb",
          "200": "#f3f4f6",
        },
        white: "#fff",
        slategray: "#6b7280",
        blueviolet: "#6639e4",
        lightgray: {
          "100": "#d1d6dc",
          "200": "#d1d5db",
        },
        lavender: {
          "100": "#f1edff",
          "200": "#ece6ff",
        },
        black: "#000",
        gray: {
          "100": "#131128",
          "200": "rgba(255, 255, 255, 0)",
        },
        crimson: "#e02424",
        gainsboro: "#e5e7eb",
        seagreen: "#0e9f6e",
        mistyrose: {
          "100": "#fde8e8",
          "200": "#ffe4e6",
        },
        tomato: "#f05252",
        darkslategray: "#374151",
        darkgray: "#a8a29e",
        lightcoral: "#fb7185",
        "black-40": "rgba(28, 28, 28, 0.4)",
      },
      spacing: {
        boundvariablesdata: "21.446252822875977px",
        boundvariablesdata1: "37.53094100952149px",
      },
      fontFamily: {
        inter: "Inter",
        poppins: "Poppins",
      },
      borderRadius: {
        "8xs": "5px",
        "9980xl": "9999px",
      },
    },
    fontSize: {
      sm: "0.875rem",
      mini: "0.938rem",
      "mini-6": "0.913rem",
      "3xl-2": "1.388rem",
      lg: "1.125rem",
      "6xl-4": "1.588rem",
      xl: "1.25rem",
      "base-9": "0.994rem",
      "base-8": "0.988rem",
      base: "1rem",
      "base-6": "0.975rem",
      "5xs-8": "0.488rem",
      "6xs": "0.438rem",
      xs: "0.75rem",
      "5xs-7": "0.481rem",
      "mid-6": "1.1rem",
      "sm-9": "0.869rem",
      "mid-4": "1.088rem",
      "xs-8": "0.738rem",
      "base-1": "1.006rem",
      "mini-1": "0.881rem",
      "mini-2": "0.888rem",
      inherit: "inherit",
    },
    screens: {
      mq1250: {
        raw: "screen and (max-width: 1250px)",
      },
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq700: {
        raw: "screen and (max-width: 700px)",
      },
      mq525: {
        raw: "screen and (max-width: 525px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
