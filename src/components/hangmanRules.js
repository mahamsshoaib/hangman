const hangmanRules = [
    "The objective of the game is to guess the hidden word by suggesting letters one at a time.",
    "The game starts with a hidden word that is represented by a row of dashes, one for each letter in the word.",
    "Each turn, the player guesses a letter that might be in the hidden word.",
    "If the guessed letter is in the hidden word, all occurrences of the letter are revealed in the word.",
    "If the guessed letter is not in the hidden word, a part of the hangman is drawn. The game ends if the hangman is fully drawn.",
    "The player wins the game if they guess all the letters in the hidden word before the hangman is fully drawn.",
    "The player loses the game if the hangman is fully drawn before they guess all the letters in the hidden word.",
  ];
export default hangmanRules;  