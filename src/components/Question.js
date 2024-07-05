import React from "react";
import Options from "./Options";
import { useQuiz } from "../Contexts/QuizContext";

const Question = () => {
  const { questions, index } = useQuiz();
  return (
    <div>
      <h4>{questions[index].question}</h4>
      <Options question={questions[index]} />
    </div>
  );
};

export default Question;
