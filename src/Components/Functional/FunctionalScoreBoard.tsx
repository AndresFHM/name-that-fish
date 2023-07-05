import "./styles/score-board.css";

interface FunctionalScoreBoardProps {
  correctCount: number;
  incorrectCount: number;
  answersLeft: string[];
}

export function FunctionalScoreBoard(props: FunctionalScoreBoardProps) {
  const { correctCount, incorrectCount, answersLeft } = props;

  return (
    <div id="score-board">
      <div>Incorrect 🔻: {incorrectCount}</div>
      <div id="choices-left">
        {answersLeft.map((answer) => (
          <div key={answer} className="choice">
            {answer}
          </div>
        ))}
      </div>
      <div>Correct ✅: {correctCount}</div>
    </div>
  );
}
