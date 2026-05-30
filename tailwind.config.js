/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      boxShadow: {
        soft: "0 12px 30px rgba(0,0,0,.08)",
      },
      colors: {
        brand: {
          500: "#2AA9E0", // 依照你圖上的藍色按鈕感
        },
      },
    },
  },
  plugins: [],
};
