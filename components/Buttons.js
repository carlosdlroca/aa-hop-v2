export default function Buttons({ keys, dispatch, activeButtons, color }) {
    return (
        <section className='buttons'>
            {keys.map((key) => (
                <button
                    className={`word-select word-select-${color} ${
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
