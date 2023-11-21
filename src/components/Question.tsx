import { useState } from "react";
import { questions } from "../data/questions.ts";
import { useIndexQuestion } from "../stores/useIndexQuestion.ts";

const Question = () => {
  const { indexQuestion } = useIndexQuestion();

  return (
    <div>
      {questions.map(
        (question, index) =>
          indexQuestion === index && (
            <div key={index}>
              {index + 1}. {question}
            </div>
          ),
      )}
    </div>
  );
};

export default Question;
