function Keyboard({ letters, handleKeyBoardClick, gameBoardData }) {
    return (
      <section className="keyboard">
        {letters.map((letter, index) => (
          <button
            key={letter}
            onClick={() => handleKeyBoardClick(letter)}
            className={gameBoardData.keyBoard[index][[letter]]}
            disabled={gameBoardData.keyBoard[index][[letter]] !== "unclicked"}
          >
            {letter}
          </button>
        ))}
      </section>
    );
  }

  export default Keyboard;
  