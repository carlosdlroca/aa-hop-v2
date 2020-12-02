const colors = require("tailwindcss/colors");
module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    purge: [
        "./components/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: (theme) => ({
                arrow: "url('/arrow.svg')",
            }),
            fontSize: {
                "wordCard-lg": "3.5rem",
                "wordCard-sm": "4.3rem",
            },
            colors: {
                orange: colors.orange,
            },
        },
    },
    variants: {},
    plugins: [],
};
