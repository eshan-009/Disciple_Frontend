/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation:{
        drawerAnimation: "drawerAnimation 0.5s ease-in-out",
        closeDrawerAnimation: "closeDrawerAnimation 0.5s ease-in-out"
      },
      keyframes : {
        drawerAnimation: {
          '0%': { transform: 'translateX(-300px)' },
          '100%': { transform: 'translatX(0)' },
        },
        closeDrawerAnimation: {
         
          '0%': { transform: 'translatX(0)' },
          '100%': { transform: 'translateX(-300px)' },
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
