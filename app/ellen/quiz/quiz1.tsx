'use client';


import { useState } from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import GameOverScreen from './gameover';

import introImage from '../../../public/ellen/quiz1/introImage.jpg';
import q1Image from '../../../public/ellen/quiz1/q1.png';
import q2Image from '../../../public/ellen/quiz1/q2.jpg';
import q3Image from '../../../public/ellen/quiz1/q3.jpg';
import q4Image from '../../../public/ellen/quiz1/q4.jpg';
import q5Image from '../../../public/ellen/quiz1/q5.jpg';
import q6Image from '../../../public/ellen/quiz1/q6.png';
import q7Image from '../../../public/ellen/quiz1/q7.jpg';
import q8Image from '../../../public/ellen/quiz1/q8.png';
import q9Image from '../../../public/ellen/quiz1/q9.jpg';
import q10Image from '../../../public/ellen/quiz1/q10.jpg';
import q11Image from '../../../public/ellen/quiz1/q11.jpg';
import q12Image from '../../../public/ellen/quiz1/q12.jpg';

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
    question: "In an interview, Wonwoo admitted he wrote his part while thinking about Mingyu for what song?",
    image: q2Image,
    options: ["Aju nice", "Clap", "Still lonely", "Fronting"],
    answer: "Fronting",
  },
  {
    question: "What is Hoshi's nickname?",
    image: q3Image,
    options: ["neon sneakers", "10 hour 10 minute", "star", "flower boy"],
    answer: "10 hour 10 minute",
  },
  {
    question: "When was 호시 born??!?!?!?!?!",
    image: q4Image,
    options: ["06.15", "07.13", "06.13", "06.25"],
    answer: "06.15",
  },
  {
    question: "Which team is Hoshi a leader of?!?! Could be tricky",
    image: q5Image,
    options: ["SVT LEADERS", "SVT BSS", "Performance Team", "Vocal Team", "Hip-Hop Team"],
    answer: "Performance Team",
  },
  {
    question: "How many studio albums has SEVENTEEN RELEASED!?!!?!",
    image: q6Image,
    options: ["7", "4", "3", "6"],
    answer: "4",
  },
  {
    question: "Time to ask some questions about Youbo?!",
    image: q7Image,
    options: ["yes", "yes"],
    answer: "yes",
  },
  {
    question: "What's the answer to this question?",
    image: q8Image,
    options: ["Could be so", "maybe", "possibly", "yes", "no"],
    answer: "Could be so",
  },
  {
    question: "Is ellen hungry!?",
    image: q9Image,
    options: ["Yes", "maybe", "No", "I'm going to eat you", "grumpy"],
    answer: "I'm going to eat you",
  },
  {
    question: "What does yobo like to do?",
    image: q10Image,
    options: ["Listen to music", "Sing", "Dance", "Talk to Stinky goober", "Pick nose"],
    answer: "Talk to Stinky goober",
  },
  {
    question: "Does Nate love Yuna?",
    image: q11Image,
    options: ["Yes", "Yes", "Yes", "Yes", "Yes"],
    answer: "Yes",
  },
  {
    question: "What was Her favorite pokemon?",
    image: q12Image,
    options: ["I dont remember name :(", "Pikachu", "Nidoking❤️", "Stinkbug", "Stunfisk"],
    answer: "Nidoking❤️",
  },
];

const Quiz1 = () => {
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
        <h1 className="text-2xl font-bold mb-2">여보!! Welcome to 13 + 3 + 1 = 17 quiz!!!!</h1>
        <Image src={introImage} alt="Introduction Image" width={600} height={400} />
        <p className="text-lg mb-4">HI 여보여보여보, are you ready for the super duper hard svntn quiz?</p>
        <button
          className="px-6 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700 transition duration-300"
          onClick={() => setShowIntro(false)}
        >
          Too easy!
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

export default Quiz1;
