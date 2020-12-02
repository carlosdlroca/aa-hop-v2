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
                "wordCard-lg": "3.7rem",
                "wordCard-sm": "3rem",
            },
            colors: {
                orange: colors.orange,
            },
        },
    },
    variants: {},
    plugins: [],
};
