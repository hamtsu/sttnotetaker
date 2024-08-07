/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "animation": {
        "fade-in": "fade-in 0.5s ease-in-out",
        "fade-in-late": "fade-in 1s ease-in-out",
      },
      // Keyframes for animation
      "keyframes":{
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      }
    },
  },
  plugins: [],
}
