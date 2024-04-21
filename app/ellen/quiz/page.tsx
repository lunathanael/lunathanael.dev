"use client";

import { useState } from 'react';
import Quiz1 from './quiz1';
import Quiz2 from './quiz2';

export default function Home() {
  const [activeQuiz, setActiveQuiz] = useState('quiz1');

  // Function to determine button styles
  const buttonClass = (quizName: string) => 
    `px-4 py-2 font-semibold rounded-lg shadow-md transition ease-in-out duration-150 ${
      activeQuiz === quizName ? "bg-blue-700 text-white" : "bg-blue-500 text-white hover:bg-blue-700"
    }`;

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold text-center my-4">COOL QUIZ FOR YOBO</h1>
      <div className="flex justify-center space-x-4 my-4">
        <button 
          onClick={() => setActiveQuiz('quiz1')} 
          className={buttonClass('quiz1')}
        >
          Quiz 1
        </button>
        <button 
          onClick={() => setActiveQuiz('quiz2')} 
          className={buttonClass('quiz2')}
        >
          Quiz 2
        </button>
      </div>
      {activeQuiz === 'quiz1' && <Quiz1 />}
      {activeQuiz === 'quiz2' && <Quiz2 />}
    </div>
  );
}
