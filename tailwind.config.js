const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                "blue": "#192D41",
                "abu" : "#F2F4F1",
                "kuning" : "#FCCD07",
                "putih" : "#FFFFFF"
            },
            fontSize: {
                sm: '0.8rem',
                m : '0.92rem',
                base: '1rem',
                lg: '1.5rem',
                xl: '1.25rem',
                '2xl': '1.563rem',
                '3xl': '1.953rem',
                '4xl': '2.441rem',
                '5xl': '3.052rem',
            }
        },
    },

    plugins: [require('@tailwindcss/forms'), require('daisyui')],
};
