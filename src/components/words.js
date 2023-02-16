const words = [
  "apple",
  "banana",
  "cherry",
  "date",
  "elderberry",
  "fig",
  "grapefruit",
  "honeydew",
  "jackfruit",
  "kiwi",
  "lemon",
  "mango",
  "nectarine",
  "orange",
  "pineapple",
  "quince",
  "raspberry",
  "strawberry",
  "tangerine",
  "ugli fruit",
  "vanilla bean",
  "watermelon",
  "xigua",
  "yellow watermelon",
  "zucchini",
  "avocado",
  "blueberry",
  "cranberry",
  "dragonfruit",
  "elderflower",
  "feijoa",
  "grape",
  "huckleberry",
  "imbe",
  "jujube",
  "kumquat",
  "lime",
  "lychee",
  "mandarin",
  "nectar",
  "olive",
  "pear",
  "quince",
  "raisin",
  "strawberry",
  "tangerine",
  "ugli fruit",
  "vanilla",
  "watermelon",
  "xigua",
  "yellow watermelon",
  "zucchini"
];

/*Random Word Generator */
const randomWord = () => {
  return words[Math.floor(Math.random() * words.length)];
};
const anyWord = randomWord();

let guessCharacter = [];
for (let i = 0; i < anyWord.length; i++) {
  guessCharacter[i] = "_";
}
export { guessCharacter, anyWord };
