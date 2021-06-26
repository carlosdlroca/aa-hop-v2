export default function constructWord(chosenWord) {
    // There is no chosen word
    if (chosenWord == null || Object.keys(chosenWord).length < 1) return null;

    // Word is not broken up so just return the full word
    if (chosenWord.hasOwnProperty("single")) return chosenWord.wordCap;

    const { partPosition, wordPart, wordCap } = chosenWord;

    if (partPosition == "start") {
        return wordPart + wordCap;
    } else {
        return wordCap + wordPart;
    }
}
