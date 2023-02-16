function Hangman({ guesses, images }) {
    return (
      <section className="hangman">
        <img
          src={images[guesses]}
          width="30%"
          height="auto"
          id="hangmanImage"
        />
      </section>
    );
  }
export default Hangman;  