import React from "react";

function GameOver({ gameStatus, handlePlayAgainClick }) {
  return (
    <div className="gameOver">
      <h1>Game Over</h1>
      {gameStatus === "won" ? (
        <h2>Yayyy...You Won :)</h2>
      ) : (
        <h2>Aww...You Lost :(</h2>
      )}
      <button className="playAgain" onClick={handlePlayAgainClick}>
        Play Again
      </button>
    </div>
  );
}

export default GameOver;
