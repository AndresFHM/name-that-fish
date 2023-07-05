
import "./App.css";
import { useState } from "react";
// import { ClassApp } from "./Components/Class/ClassApp";
import { FunctionalApp } from "./Components/Functional/FunctionalApp";
import { Fish } from "./types";
import { Images } from "./assets/Images";


function App() {
  const initialFishes: Fish[] = [
    {
      name: "trout",
      url: Images.trout,
    },
    {
      name: "salmon",
      url: Images.salmon,
    },
    {
      name: "tuna",
      url: Images.tuna,
    },
    {
      name: "shark",
      url: Images.shark,
    },
  ];

  const [answersLeft, setAnswersLeft] = useState<string[]>(["trout", "salmon", "tuna", "shark"]);
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [incorrectCount, setIncorrectCount] = useState<number>(0);
  const [currentPictureIndex, setCurrentPictureIndex] = useState<number>(0);

  const handleGuessResult = (isCorrect: boolean) =>{
    if (isCorrect) {
      setCorrectCount(prevCount => prevCount + 1);
    } else {
      setIncorrectCount(prevCount => prevCount + 1);
    }
    setAnswersLeft(prevAnswers => prevAnswers.slice(1));
    setCurrentPictureIndex(prevIndex => prevIndex + 1);
  }

  return (
    <div className="App">
      <h1>Name That Fish</h1>
      <div className="split">
        <div className="left">
          <h3>Functional</h3>
          <FunctionalApp
            initialFishes={initialFishes}
            answersLeft={answersLeft}
            correctCount={correctCount}
            incorrectCount={incorrectCount}
            currentPictureIndex={currentPictureIndex}
            handleGuessResult={handleGuessResult}
          />
        </div>
        <div className="right">
          <h3>Class</h3>
          {/* <ClassApp
            initialFishes={initialFishes}
            answersLeft={answersLeft}
            correctCount={correctCount}
            incorrectCount={incorrectCount}
            currentPictureIndex={currentPictureIndex}
            handleGuessResult={handleGuessResult}
          /> */}
        </div>
      </div>
    </div>
  );
}

export default App;

