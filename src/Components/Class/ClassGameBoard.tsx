import { Component, FormEvent } from "react";
import "./styles/game-board.css";
import { Fish } from "../../types";

interface ClassGameBoardProps {
  initialFishes: Fish[];
  currentPictureIndex: number;
  handleGuessResult: (isCorrect: boolean) => void; 
}

interface ClassGameBoardState {
  fishGuessInput: string;
  guessResult: string;
}

export class ClassGameBoard extends Component<
  ClassGameBoardProps,
  ClassGameBoardState
> {
  state = {
    fishGuessInput: "",
    guessResult: ""
  };

  fishGuessHandle = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { fishGuessInput } = this.state;
    const { initialFishes, currentPictureIndex, handleGuessResult } = this.props;
    const nextFishToName = initialFishes[currentPictureIndex];

    if (fishGuessInput.toLowerCase() === nextFishToName.name.toLowerCase()) {
      handleGuessResult(true);
    } else {
      handleGuessResult(false);
    }

    this.setState({ fishGuessInput: "" });
  };

  render() {
    const { initialFishes, currentPictureIndex } = this.props;
    const { fishGuessInput } = this.state;
    const nextFishToName = initialFishes[currentPictureIndex];

    return (
      <div id="game-board">
        <div id="fish-container">
          <img src={nextFishToName.url} alt={nextFishToName.name} />
        </div>
        <form id="fish-guess-form" onSubmit={this.fishGuessHandle}>
          <label htmlFor="fish-guess">What kind of fish is this?</label>
          <input
            type="text"
            name="fish-guess"
            value={fishGuessInput}
            onChange={(e) => this.setState({ fishGuessInput: e.target.value })}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
