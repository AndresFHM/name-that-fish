import { useState, FormEvent } from "react";
import "./styles/game-board.css";
import { Fish } from "../../types";

interface FunctionalGameBoardProps {
  fishData: Fish;
  handleGuessResult: (isCorrect: boolean) => void;
}

export function FunctionalGameBoard(props: FunctionalGameBoardProps) {
  const { fishData, handleGuessResult } = props;
  const [fishGuessInput, setFishGuessInput] = useState("");


  const fishGuessHandle = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (fishGuessInput.toLowerCase() === fishData.name.toLowerCase()) {

      handleGuessResult(true);
    } else {

      handleGuessResult(false);

    }

    setFishGuessInput("");
  };

  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={fishData.url} alt={fishData.name} />
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
    </div>
  );
}
