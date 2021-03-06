export const initialState = {
    /**
     * Initial State of the App
     * activeButtons: List of active Buttons
     * words: Object of words chosen through active buttons
     * count: count of words completed
     * chosenWord
     */
    activeButtons: [],
    words: {},
    count: 0,
    chosenWord: {},
    previousWords: [],
    muted: true,
    voiceRecognitionIsOn: false,
};

export function reducer(file) {
    return function reducer(state, action) {
        switch (action.type) {
            case "TOGGLE_BUTTON":
                const [newActiveButtons, removeWords] = addOrRemoveKey(
                    state.activeButtons,
                    action.key
                );

                if (removeWords) {
                    const { [action.key]: omitKey, ...rest } = state.words;
                    return {
                        ...state,
                        words: rest,
                        activeButtons: newActiveButtons,
                    };
                }

                return {
                    ...state,
                    activeButtons: newActiveButtons,
                    words: {
                        ...state.words,
                        [action.key]: transformWords(file.words[action.key]),
                    },
                };

            case "UPDATE_COUNT":
                return { ...state, count: state.count + 1 };
            case "RESET_COUNT":
                return { ...state, count: 0 };
            case "RESET_STATE":
                return {
                    ...initialState,
                    muted: state.muted,
                    voiceRecognitionIsOn: state.voiceRecognitionIsOn,
                };
            case "REDO_LAST_WORD":
                const prevWordsLen = state.previousWords.length;
                const newPreviousWords = [];
                state.previousWords.forEach((word, idx) => {
                    if (idx < prevWordsLen - 1) {
                        newPreviousWords.push(word);
                    }
                });
                return {
                    ...state,
                    previousWords: newPreviousWords,
                    chosenWord: state.previousWords[prevWordsLen - 1],
                    count: state.count - 1,
                };
            case "CHOOSE_WORD":
                if (Object.keys(state.words).length < 1) {
                    return { ...state, chosenWord: {} };
                }

                const [newChosenWord, newWords, removeActiveFocus] =
                    chooseRandomWord(state.words);
                if (removeActiveFocus !== "") {
                    return {
                        ...state,
                        previousWords: [
                            ...state.previousWords,
                            state.chosenWord,
                        ],
                        chosenWord: newChosenWord,
                        words: newWords,
                        activeButtons: state.activeButtons.filter(
                            (b) => b !== removeActiveFocus
                        ),
                        count: state.count + 1,
                    };
                }
                return {
                    ...state,
                    previousWords: [...state.previousWords, state.chosenWord],
                    chosenWord: newChosenWord,
                    words: newWords,
                    count: state.count + 1,
                };
            case "TOGGLE_MUTE":
                return { ...state, muted: !state.muted };
            case "TOGGLE_VOICE_RECOGNITION":
                return {
                    ...state,
                    voiceRecognitionIsOn: !state.voiceRecognitionIsOn,
                };
            default:
                return state;
        }
    };
}

function addOrRemoveKey(array, value) {
    var index = array.indexOf(value);
    if (index === -1) {
        return [[...array, value], false];
    } else {
        return [array.filter((arrValue) => arrValue !== value), true];
    }
}

function transformWords(keyFocusObject) {
    const wordPartArray = Object.keys(keyFocusObject);
    let wordsArray = [];
    for (let word_part of wordPartArray) {
        const { wordCaps, ...rest } = keyFocusObject[word_part];
        const fullWords = wordCaps.map((wordCap) => {
            return {
                wordCap,
                ...rest,
                wordPart: word_part,
            };
        });
        wordsArray = [...wordsArray, ...fullWords];
    }
    return wordsArray;
}

function chooseRandomWord(words) {
    //Choose random key focus
    // Put the focus of each words into an array
    const wordKeys = Object.keys(words);
    // Generate random number
    const randKeyNum = Math.floor(Math.random() * wordKeys.length);
    // Choose key with random number
    const chosenFocus = wordKeys[randKeyNum];
    const wordsArray = words[chosenFocus]; // Array
    //Choose random word from array
    const chosenWord =
        wordsArray[Math.floor(Math.random() * wordsArray.length)];

    const { [chosenFocus]: focus, ...otherFocuses } = words;

    // Filter out chosen word from wordsArray
    const newWordsArray = wordsArray.filter((word) => {
        if (word.wordPart === chosenWord.wordPart) {
            if (word.wordCap === chosenWord.wordCap) {
                return false;
            }
        }
        return true;
    });

    if (newWordsArray.length < 1) {
        return [
            chosenWord,
            {
                ...otherFocuses,
            },
            chosenFocus,
        ];
    }
    return [
        chosenWord,
        {
            ...words,
            [chosenFocus]: newWordsArray,
        },
        "",
    ];
}
