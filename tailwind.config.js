/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    "bg-red-600",
    "bg-black",
    "bg-blue-600",
    "bg-green-600",
    "bg-indigo-800",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
