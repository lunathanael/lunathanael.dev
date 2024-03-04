'use client';


import { useState } from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import GameOverScreen from './gameover';

import introImage from '../../../public/seventeen/introImage.jpg';
import q1Image from '../../../public/seventeen/q1.png';

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
    answer: "Say the Name!",
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
  const [showFeedback, setShowFeedback] = useState<boolean>(false);
  const [quizCompleted, setQuizCompleted] = useState<boolean>(false);
  const [percentageCorrect, setPercentageCorrect] = useState<number>(0);
  const [showIntro, setShowIntro] = useState<boolean>(true);

  const question: Question = questions[currentQuestionIndex];
  const isAnswerSelected = selectedAnswers[currentQuestionIndex] !== undefined;

  const handleAnswerSelect = (option: string): void => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestionIndex]: option,
    });
    setShowFeedback(true);
  };

  const handleNextQuestion = (): void => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setShowFeedback(false);
    } else {
      const correctAnswers = Object.keys(selectedAnswers).reduce((acc, key) => {
        const questionIndex = parseInt(key, 10);
        if (questions[questionIndex].answer === selectedAnswers[questionIndex]) {
          acc += 1;
        }
        return acc;
      }, 0);
      const percentage = (correctAnswers / questions.length) * 100;
      setPercentageCorrect(percentage);
      
      setQuizCompleted(true);
    }
  };

  if (quizCompleted) {
    return <GameOverScreen percentageCorrect={percentageCorrect} />;
  }

  if (showIntro) {
    return (
      <div className="flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-2">Welcome to the 여보 quiz!!!!</h1>
        <Image src={introImage} alt="Introduction Image" width={600} height={400} />
        <p className="text-lg mb-4">HI 여보여보여보, are you ready for the super duper hard quiz?</p>
        <button
          className="px-6 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700 transition duration-300"
          onClick={() => setShowIntro(false)}
        >
          Yes!!
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <div className="mb-4">
        <Image src={question.image} alt="Question Image" width={600} height={400} layout="intrinsic"/>
      </div>
      <div className="text-lg font-semibold mb-2">{question.question}</div>
      <div className="flex flex-col">
        {question.options.map((option, index) => (
          <button
            key={index}
            className={`p-2 my-1 text-white font-bold rounded ${
              selectedAnswers[currentQuestionIndex] === option
                ? option === question.answer ? 'bg-green-500' : 'bg-red-500'
                : isAnswerSelected && option === question.answer ? 'bg-green-500' : 'bg-blue-500'
            }`}
            onClick={() => handleAnswerSelect(option)}
            disabled={isAnswerSelected} 
          >
            {option}
          </button>
        ))}
      </div>
      {showFeedback && (
        <div className="mt-4 text-lg">
          {selectedAnswers[currentQuestionIndex] === question.answer ? "Good Job!!!! You are a real Seventeen fan! I'm so proud of you!" : "Wrong answer :(, not a real Carat!!!"}
        </div>
      )}
      {showFeedback && (
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700"
          onClick={handleNextQuestion}
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Quiz;
