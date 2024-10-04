/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgColor: "#080a1a",
        primary: "#00bfff",
      },
      boxShadow: {
        card: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
      },
      animation: {
        "spin-slow": "spin 60s linear infinite", // slower spin
        fade: "fadeOut 0.5s ease",
        fadeCard: "fadeOut 0.2s ease",

        "start" : "start 1s ease",
        "end" : "end 0.8s ease",
        "card" : "card 0.5s ease"
      },
      // that is actual animation
      keyframes: (theme) => ({
        fadeOut: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      }),
    },
  },
  plugins: [],
};
