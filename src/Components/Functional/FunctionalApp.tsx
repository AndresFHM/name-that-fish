import { useState } from "react";
import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { Fish } from "../../types";

interface FunctionalAppProps {
  initialFishes: Fish[];
}

export function FunctionalApp({ initialFishes }: FunctionalAppProps) {

  const [correctCount, setCorrectCount] = useState<number>(0);
  const [incorrectCount, setIncorrectCount] = useState<number>(0);
  const [currentPictureIndex, setCurrentPictureIndex] = useState<number>(0);

  const isGameOver = currentPictureIndex === initialFishes.length;
  const answersLeft  = initialFishes.slice(currentPictureIndex).map((fish) => fish.name)

  const handleGuessResult = (isCorrect: boolean) => {
    if (isCorrect) {
      setCorrectCount((prevCount) => prevCount + 1);
    } else {
      setIncorrectCount((prevCount) => prevCount + 1);
    }
    setCurrentPictureIndex((prevIndex) => prevIndex + 1);
  };


  return (
    <>
      {isGameOver && (
      <FunctionalFinalScore
        correctCount={correctCount}
        totalCount={correctCount + incorrectCount}
      />
      )}
      {!isGameOver && (
        <>
          <FunctionalScoreBoard
            incorrectCount={incorrectCount}
            correctCount={correctCount}
            answersLeft={answersLeft}
          />
          <FunctionalGameBoard
            fishData={initialFishes[currentPictureIndex]}
            handleGuessResult={handleGuessResult}
          />
        </>  
        )
      }
    </>
  );
}
