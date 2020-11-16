export default function Buttons({ keys, dispatch, activeButtons, color }) {
    return (
        <section className='buttons flex flex-wrap items-center justify-evenly max-w-6xl mx-auto'>
            {keys.map((key) => (
                <button
                    className={`${
                        activeButtons.includes(key)
                            ? `bg-${color}-500 hover:bg-${color}-400 text-gray-100`
                            : `bg-gray-100 text-${color}-500 hover:bg-${color}-200`
                    } text-gray-100 text-3xl md:text-5xl py-2 px-12 md:px-20 rounded-2xl mb-5 mr-8 grid place-items-center border-2 border-${color}-500`}
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
