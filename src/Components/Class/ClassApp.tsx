import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";
import { Fish } from "../../types";

interface ClassAppState {
  answersLeft: Fish[];
  correctCount: number;
  incorrectCount: number;
  currentPictureIndex: number;
}

interface ClassAppProps {
  initialFishes: Fish[];
}

export class ClassApp extends Component<ClassAppProps, ClassAppState> {
  constructor(props: ClassAppProps) {
    super(props);
    this.state = {
      answersLeft: props.initialFishes.slice(),
      correctCount: 0,
      incorrectCount: 0,
      currentPictureIndex: 0,
    };
  }

  handleGuessResult = (isCorrect: boolean) => {
    const { correctCount, incorrectCount, currentPictureIndex } = this.state;

    if (isCorrect) {
      this.setState({
        correctCount: correctCount + 1,
      });
    } else {
      this.setState({
        incorrectCount: incorrectCount + 1,
      });
    }

    this.setState((prevState) => ({
      answersLeft: prevState.answersLeft.slice(1),
      currentPictureIndex: currentPictureIndex + 1,
    }));
  };

  render() {
    const { answersLeft, correctCount, incorrectCount, currentPictureIndex } =
      this.state;

    if (answersLeft.length === 0) {
      return (
        <ClassFinalScore
          correctCount={correctCount}
          totalCount={correctCount + incorrectCount}
        />
      );
    }

    return (
      <>
        <ClassScoreBoard
          incorrectCount={incorrectCount}
          correctCount={correctCount}
          answersLeft={answersLeft.map((fish) => fish.name)}
        />
        <ClassGameBoard
          initialFishes={this.props.initialFishes}
          currentPictureIndex={currentPictureIndex}
          handleGuessResult={this.handleGuessResult}
        />
      </>
    );
  }
}
