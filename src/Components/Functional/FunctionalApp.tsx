
import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { Fish } from "../../types";

interface FunctionalAppProps {
  initialFishes: Fish[];
  answersLeft: string[];
  correctCount: number;
  incorrectCount: number;
  currentPictureIndex: number;
  handleGuessResult: (isCorrect: boolean) => void;
}

export function FunctionalApp(props: FunctionalAppProps) {
  const {
    initialFishes,
    answersLeft,
    correctCount,
    incorrectCount,
    currentPictureIndex,
  } = props;

  if (answersLeft.length === 0) {
    return <FunctionalFinalScore correctCount={correctCount} totalCount={correctCount + incorrectCount} />;
  }
  
  return (
    <>
      <FunctionalScoreBoard
        incorrectCount={incorrectCount}
        correctCount={correctCount}
        answersLeft={answersLeft}
      />
      <FunctionalGameBoard
        initialFishes={initialFishes}
        currentPictureIndex={currentPictureIndex}
        handleGuessResult={props.handleGuessResult}
      />
    </>
  );
}
