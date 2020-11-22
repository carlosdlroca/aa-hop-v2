const colors = require("tailwindcss/colors");
module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
    },
    theme: {
        extend: {
            backgroundImage: (theme) => ({
                arrow: "url('/arrow.svg')",
            }),
            fontSize: {
                "wordCard-lg": "6rem",
                "wordCard-sm": "3rem",
            },
            colors: {
                amber: colors.amber,
                orange: colors.orange,
            },
        },
    },
    variants: {},
    plugins: [],
};
