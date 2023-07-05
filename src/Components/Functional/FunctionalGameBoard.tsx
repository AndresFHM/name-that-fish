
import { useState, FormEvent } from "react";
import "./styles/game-board.css";
import { Fish } from "../../types";

interface FunctionalGameBoardProps {
  initialFishes: Fish[];
  currentPictureIndex: number;
  handleGuessResult: (isCorrect: boolean) => void;
}

export function FunctionalGameBoard(props: FunctionalGameBoardProps) {
  const { initialFishes, currentPictureIndex, handleGuessResult } = props;
  const [fishGuessInput, setFishGuessInput] = useState("");
  const [guessResult, setGuessResult] = useState("");

  const nextFishToName = initialFishes[currentPictureIndex];

  const fishGuessHandle = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (fishGuessInput.toLowerCase() === nextFishToName.name.toLowerCase()) {
      console.log("Correct");
      handleGuessResult(true);
    } else {
      console.log("Incorrect");
      handleGuessResult(false);
      setGuessResult("Incorrect");
    }

    setFishGuessInput("");
  };

  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={nextFishToName.url} alt={nextFishToName.name} />
      </div>
      <form id="fish-guess-form" onSubmit={fishGuessHandle}>
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          type="text"
          name="fish-guess"
          value={fishGuessInput}
          onChange={(e) => setFishGuessInput(e.target.value)}
        />
        <input type="submit" />
      </form>
      {guessResult && <p>{guessResult}</p>}
    </div>
  );
}
