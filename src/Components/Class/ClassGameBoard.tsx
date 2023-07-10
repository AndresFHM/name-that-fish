
import { Component, FormEvent } from "react";
import "./styles/game-board.css";
import { Fish } from "../../types";

interface ClassGameBoardProps {
  fishData: Fish;
  handleGuessResult: (isCorrect: boolean) => void; 
}

interface ClassGameBoardState {
  fishGuessInput: string;

}

export class ClassGameBoard extends Component<
  ClassGameBoardProps,
  ClassGameBoardState
> {
  state : ClassGameBoardState = {
    fishGuessInput: "",
  };

  fishGuessHandle = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { fishGuessInput } = this.state;
    const { fishData, handleGuessResult } = this.props;

    if (fishGuessInput.toLowerCase() === fishData.name.toLowerCase()) {
      handleGuessResult(true);
    } else {
      handleGuessResult(false);
    }

    this.setState({ fishGuessInput: "" });
  };

  render() {
    const { fishData } = this.props;
    const { fishGuessInput } = this.state;

    return (
      <div id="game-board">
        <div id="fish-container">
          <img src={fishData.url} alt={fishData.name} />
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
