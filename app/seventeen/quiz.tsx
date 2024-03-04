'use client';

import { StaticImageData } from 'next/image';
import Image from 'next/image'
import { useState } from 'react';
import q1Image from '/public/seventeen/q1.png';


interface Question {
  question: string;
  image: StaticImageData;
  options: string[];
  answer: string;
}


const questions: Question[] = [
  {
    question: "What is SEVENTEEN's slogan/greeting?",
    image: q1Image,
    options: ["We are One!", "Come & Get It!", "To the World!", "Say the Name!"],
    answer: "Paris",
  },
  {
    question: "Which is the largest ocean?",
    image: q1Image,
    options: ["Atlantic", "Indian", "Arctic", "Pacific"],
    answer: "Pacific",
  },
];


const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>({});

  const question: Question = questions[currentQuestionIndex];

  const handleAnswerSelect = (option: string): void => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestionIndex]: option,
    });

    // Optionally move to the next question automatically
    if (currentQuestionIndex < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }, 1000); // Delay before moving to the next question
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="mb-4">
        <Image width={600} height={1000} src={question.image} alt="Question Image"/>
      </div>
      <div className="text-lg font-semibold mb-2">{question.question}</div>
      <div className="flex flex-col">
        {question.options.map((option, index) => (
          <button
            key={index}
            className={`p-2 my-1 text-white font-bold rounded ${
              selectedAnswers[currentQuestionIndex] === option
                ? option === question.answer ? 'bg-green-500' : 'bg-red-500'
                : 'bg-blue-500'
            }`}
            onClick={() => handleAnswerSelect(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Quiz;


  