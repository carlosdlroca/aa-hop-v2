export default function Buttons({ keys, dispatch, activeButtons, color }) {
    return (
        <section className='buttons'>
            {keys.map((key) => (
                <button
                    className={`word-select ${printClassWithColor(color)} ${
                        activeButtons.includes(key) ? "active" : ""
                    }`}
                    key={key}
                    aria-label={`Letter ${key}`}
                    onClick={() => dispatch({ type: "TOGGLE_BUTTON", key })}
                >
                    {key}
                </button>
            ))}
        </section>
    );
}

function printClassWithColor(color) {
    switch (color) {
        case "red":
            return "word-select-red";
        case "blue":
            return "word-select-blue";
        case "green":
            return "word-select-green";
        case "orange":
            return "word-select-orange";
        case "purple":
            return "word-select-purple";
    }
}
