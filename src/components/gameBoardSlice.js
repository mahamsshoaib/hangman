import { createSlice } from "@reduxjs/toolkit";
import { anyWord, guessCharacter } from "./words";

export const gameBoardSlice = createSlice({
  name: "gameBoard",
  initialState: {
    helpFlag: false,
    guesses: 1,
    gameStatus: "ongoing",
    word: anyWord,
    guessWord: guessCharacter,
    /*Initializing states of alphabets */
    keyBoard: [
      { a: "unclicked" },
      { b: "unclicked" },
      { c: "unclicked" },
      { d: "unclicked" },
      { e: "unclicked" },
      { f: "unclicked" },
      { g: "unclicked" },
      { h: "unclicked" },
      { i: "unclicked" },
      { j: "unclicked" },
      { k: "unclicked" },
      { l: "unclicked" },
      { m: "unclicked" },
      { n: "unclicked" },
      { o: "unclicked" },
      { p: "unclicked" },
      { q: "unclicked" },
      { r: "unclicked" },
      { s: "unclicked" },
      { t: "unclicked" },
      { u: "unclicked" },
      { v: "unclicked" },
      { w: "unclicked" },
      { x: "unclicked" },
      { y: "unclicked" },
      { z: "unclicked" },
    ],
  },
  reducers: {
    changeLetterStatus: (state, action) => {
      const index = state.keyBoard.findIndex(
        (obj) => Object.keys(obj)[0] === action.payload.letter
      );
      state.keyBoard[index] = {
        [action.payload.letter]: action.payload.letterStatus,
      };
    },
    /*It will display the letter selected by user*/
    addLetterToGuessWord: (state, action) => {
      state.guessWord = action.payload.gWord;
    },
    /*changing the state of numkber of guesses*/
    deductGuess: (state, action) => {
      state.guesses = state.guesses + 1;
    },
    /* Game status*/
    changeGameStatus: (state, action) => {
      state.gameStatus = action.payload.gameStatus;
    },
    changeHelpFlag: (state, action) => {
      if (state.helpFlag) {
        state.helpFlag = false;
      } else {
        state.helpFlag = true;
      }
    },
  },
});

export const selectState = (state) => state.gameBoard;

export const {
  changeLetterStatus,
  addLetterToGuessWord,
  deductGuess,
  changeGameStatus,
  changeHelpFlag,
} = gameBoardSlice.actions;
export default gameBoardSlice.reducer;
