import { letters } from "./helpers/letters";
import { HangImage } from "./components/HangImage";
import "./App.css";
import { useEffect, useState } from "react";
import { getRandomWord } from "./helpers/getRamdomWords";

function App() {
  const [word, setWord] = useState(getRandomWord);
  const [hiddenWord, setHiddenWord] = useState("_ ".repeat(word.length));
  const [attempts, setAttempts] = useState(0);
  const [lose, setLose] = useState(false);
  const [won, setWon] = useState(false);

  //Ver si la persona perdió
  useEffect(() => {
    if (attempts >= 9) {
      setLose(true);
    }
  }, [attempts]);

  //Determinar si la persona ganó
  useEffect(() => {
    const currentHiddenWord = hiddenWord.split(" ").join("");
    if (currentHiddenWord === word) {
      setWon(true);
    }
  }, [hiddenWord]);

  const checkletter = (letter: string) => {
    if (lose) return;
    if (won) return;

    if (!word.includes(letter)) {
      setAttempts(Math.min(attempts + 1, 9));
      return;
    }

    const hiddenWordArray = hiddenWord.split(" ");

    for (let i = 0; i < word.length; i++) {
      if (word[i] === letter) {
        hiddenWordArray[i] = letter;
      }
    }
    setHiddenWord(hiddenWordArray.join(" "));
  };

  const newGame = () => {
    const newWord = getRandomWord();

    setWord(newWord);
    setHiddenWord("_ ".repeat(newWord.length));
    setAttempts(0);
    setLose(false);
    setWon(false);

    setWord;
  };

  return (
    <div className="App">
      {/* Imagenes */}
      <HangImage imageNumber={attempts} />

      {/* Palabra oculta*/}
      <h3>{hiddenWord}</h3>

      {/* Contador de intentos*/}
      <h3>Intentos: {attempts}</h3>

      {/* Mensaje si perdó*/}
      {lose ? <h2> Perdió, la palabra era: {word}</h2> : ""}

      {/* Mensaje si ganó*/}
      {won ? <h2>FELICIDADES, GANASTE</h2> : ""}

      {/* Botones letras*/}
      {letters.map((letter) => (
        <button onClick={() => checkletter(letter)} key={letter}>
          {letter}
        </button>
      ))}
      <br />
      <br />
      <button onClick={newGame}>¿QUIERES JUGAR DE NUEVO?</button>

      {/* Saludo*/}
      <h3>Hecho por el Tino, derechos reservados.</h3>
    </div>
  );
}

export default App;
