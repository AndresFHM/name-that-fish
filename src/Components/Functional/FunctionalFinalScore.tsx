import React from "react";
import "./styles/final-score.css";

interface FunctionalFinalScoreProps {
  correctCount: number;
  totalCount: number;
}

export const FunctionalFinalScore: React.FC<FunctionalFinalScoreProps> = ({ correctCount, totalCount }) => (
  <div id="final-score">
    <h1>Your Final Score Was</h1>
    <div id="score">
      <p>{correctCount}</p>
      <hr />
      <p>{totalCount}</p>
    </div>
  </div>
);
