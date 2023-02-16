import "./GameBoard.css";
import hangmanRules from "./hangmanRules";
import img1 from "../images/hangman/1.jpg";
import img2 from "../images/hangman/2.jpg";
import img3 from "../images/hangman/3.jpg";
import img4 from "../images/hangman/4.jpg";
import img5 from "../images/hangman/5.jpg";
import img6 from "../images/hangman/6.jpg";
import img7 from "../images/hangman/7.jpg";

import {
  addLetterToGuessWord,
  changeLetterStatus,
  deductGuess,
  selectState,
  changeGameStatus,
  changeHelpFlag,
} from "./gameBoardSlice";
import { useSelector, useDispatch } from "react-redux";
import Keyboard from "./Keyboard";
import Word from "./Word";
import Hangman from "./Hangman";
import GameOver from "./GameOver";

/*Array to display keyboard of alphabets on screen */
function GameBoard() {
  const letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const images = [img1, img2, img3, img4, img5, img6, img7];
  const gameBoardData = useSelector(selectState);
  const dispatch = useDispatch();
  let gWord = [...gameBoardData.guessWord];

  /*When Hint Button is clicked this function will run */
  const handleHintClick = () => {
    console.log(gWord);
    let rand;
    do {
      rand = Math.floor(Math.random() * gWord.length);
    } while (gWord[rand] !== "_");
    console.log(gameBoardData.word[rand]);
    handleKeyBoardClick(gameBoardData.word[rand]);
  };
  const handlePlayAgainClick = () => {
    window.location.reload();
  };
  const handleHelpClick = () => {
    dispatch(changeHelpFlag());
  };
  /*When any of the key or alphabet is clicked this function will run*/
  const handleKeyBoardClick = (letter) => {
    if (gameBoardData.word.includes(letter)) {
      dispatch(changeLetterStatus({ letter, letterStatus: "matched" }));

      for (let i = 0; i < gameBoardData.word.length; i++) {
        if (letter === gameBoardData.word[i]) {
          gWord[i] = letter;
        }
      }

      dispatch(addLetterToGuessWord({ gWord }));

      /*Winning Condition check */
      if (gameBoardData.word === gWord.join("")) {
        console.log("you won.");
        dispatch(changeGameStatus({ gameStatus: "won" }));
      }
    } else {
      const img = document.getElementById("hangmanImage");
      img.classList.add("shake");
      setTimeout(() => img.classList.remove("shake"), 500);
      dispatch(deductGuess());
      dispatch(changeLetterStatus({ letter, letterStatus: "unmatched" }));
    }
  };

  /*rendering the gameboard*/
  return (
    <div className="game-border">
      {gameBoardData.helpFlag ? (
        <>
          <h1>Rules: </h1>
          {
            hangmanRules.map((rule,index) => <li key={index}>{rule}</li>)
          }
          <button className="hintButton" onClick={() => handleHelpClick()}>
            Back To Game
          </button>
        </>
      ) : gameBoardData.guesses < 7 &&
        gameBoardData.gameStatus === "ongoing" ? (
        <>
          <h1 className="gameName">Hangman Classico</h1>
          <section className="head">
            <button className="hintButton" onClick={() => handleHintClick()}>
              Hint
            </button>
            <button className="hintButton" onClick={() => handleHelpClick()}>
              Help
            </button>
          </section>

          <Word guessWord={gameBoardData.guessWord} />

          <Hangman images={images} guesses={gameBoardData.guesses} />

          <Keyboard
            letters={letters}
            handleKeyBoardClick={handleKeyBoardClick}
            gameBoardData={gameBoardData}
          />
        </>
      ) : (
        <GameOver
          gameStatus={gameBoardData.gameStatus}
          handlePlayAgainClick={handlePlayAgainClick}
        />
      )}
    </div>
  );
}

export default GameBoard;
