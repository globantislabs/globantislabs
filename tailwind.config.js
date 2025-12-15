/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#F05A24', // Globantis Orange (20% usage - Action/Highlight)
                secondary: '#131b2fff', // Lighter Dark Blue (Text/Accents)
                neutral: '#F9FAFB', // Off-white/Gray (Part of 70% white)
                accent: '#00C2FF', // Bright Cyan for small details
            },
            fontFamily: {
                sans: ['"Plus Jakarta Sans"', 'sans-serif'],
                heading: ['"Space Grotesk"', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
