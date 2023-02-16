function Word({ guessWord }) {
  return (
    <section className="word">
      <h2>{guessWord.map((l) => l + " ")}</h2>
    </section>
  );
}

export default Word;
