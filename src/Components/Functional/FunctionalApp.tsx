import { useState } from "react";
import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { Fish } from "../../types";

interface FunctionalAppProps {
  initialFishes: Fish[];
}

export function FunctionalApp({ initialFishes }: FunctionalAppProps) {
  const [answersLeft, setAnswersLeft] = useState<Fish[]>(initialFishes);
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [incorrectCount, setIncorrectCount] = useState<number>(0);
  const [currentPictureIndex, setCurrentPictureIndex] = useState<number>(0);

  const handleGuessResult = (isCorrect: boolean) => {
    if (isCorrect) {
      setCorrectCount((prevCount) => prevCount + 1);
    } else {
      setIncorrectCount((prevCount) => prevCount + 1);
    }
    setAnswersLeft((prevAnswers) => prevAnswers.slice(1));
    setCurrentPictureIndex((prevIndex) => prevIndex + 1);
  };

  if (answersLeft.length === 0) {
    return (
      <FunctionalFinalScore
        correctCount={correctCount}
        totalCount={correctCount + incorrectCount}
      />
    );
  }

  return (
    <>
      <FunctionalScoreBoard
        incorrectCount={incorrectCount}
        correctCount={correctCount}
        answersLeft={answersLeft.map((fish) => fish.name)}
      />
      <FunctionalGameBoard
        initialFishes={initialFishes}
        currentPictureIndex={currentPictureIndex}
        handleGuessResult={handleGuessResult}
      />
    </>
  );
}
