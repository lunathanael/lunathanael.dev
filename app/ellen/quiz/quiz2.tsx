'use client';


import { useState } from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import GameOverScreen from './gameover';

import introImage from '../../../public/ellen/quiz2/introImage.jpg';
import q1Image from '../../../public/ellen/quiz2/q1.jpg';
import q2Image from '../../../public/ellen/quiz2/q2.jpg';
import q3Image from '../../../public/ellen/quiz2/q3.jpg';
import q4Image from '../../../public/ellen/quiz2/q4.jpg';
import q5Image from '../../../public/ellen/quiz2/q5.jpg';
import q6Image from '../../../public/ellen/quiz2/q6.jpg';
import q7Image from '../../../public/ellen/quiz2/q7.jpg';
import q8Image from '../../../public/ellen/quiz2/q8.jpg';
import q9Image from '../../../public/ellen/quiz2/q9.jpg';
import q10Image from '../../../public/ellen/quiz2/q10.jpg';
import q11Image from '../../../public/ellen/quiz2/q11.jpg';
import q12Image from '../../../public/ellen/quiz2/q12.jpg';

interface Question {
  question: string;
  image: StaticImageData;
  options: string[];
  answer: string | string[];
  type: 'single' | 'multiple' | 'text';
}

type SelectedAnswersType = { [key: number]: string | string[] };

const questions: Question[] = [
  {
    question: "In Super, which Asian mythical legend was repetitively referenced?",
    image: q1Image,
    options: ["Crew Dragon", "Dancing Drunkard", "Journey to the West", "Legend of the white dancing tiger"],
    answer: "Journey to the West",
    type: 'single',
  },
  {
    question: "Who sung the outro to Super?",
    image: q2Image,
    options: [],
    answer: "WOOZI",
    type: 'text',
  },
  {
    question: "How many times is \"crew\" sung in Super?",
    image: q3Image,
    options: ["3", "6", "9", "12", "20", "4"],
    answer: "6",
    type: 'single',
  },
  {
    question: "Which people wrote Super?",
    image: q4Image,
    options: ["S.Coups",
      "Jeonghan",
      "Joshua",
      "Jun",
      "Bumzu",
      "Hoshi",
      "Wonwoo",
      "Woozi",
      "DK",
      "Mingyu",
      "The8",
      "Seungkwan",
      "Vernon",
      "Dino",
      "august rigo"],
    answer: ["woozi", "bumzu", "s.coups", "vernon", "august rigo"],
    type: 'multiple',
  },
  {
    question: "When did Seventeen recieve a Prime Minister's Commendation",
    image: q5Image,
    options: ["October 28, 2020", "September 17 2019", "January 12 2022", "August 2 2023", "December 12 2020"],
    answer: "October 28, 2020",
    type: 'single',
  },
  {
    question: "Seventeen's first endorsement, which was on October 13, 2016, was modeling for the American perfume brand...?",
    image: q6Image,
    options: ["ELOREA", "NONFICTION", "Dior", "Clean", "Estee Lauder", "Ralph Lauren"],
    answer: "Clean",
    type: 'single',
  },
  {
    question: "Seventeen celebrates their anniversary by?",
    image: q7Image,
    options: ["help individuals accomplish their goals", "donating to charitable causes", "releasing a thank you video", "publishing a instagram reel", "group vacation", "concert tour"],
    answer: "donating to charitable causes",
    type: 'single',
  },
  {
    question: "How many television shows has Seventeen had?",
    image: q8Image,
    options: [],
    answer: "8",
    type: 'text',
  },
  {
    question: "In an interview with The Korean Herald, a member said\"Our participation ... went much further than just contributing our opinions. The leaders of the three unit groups went to every album production meeting to make sure that we could tell our own story.\" Who was this?",
    image: q9Image,
    options: ["S.Coups",
      "Jeonghan",
      "Joshua",
      "Jun",
      "Hoshi",
      "Wonwoo",
      "Woozi",
      "DK",
      "Mingyu",
      "The8",
      "Seungkwan",
      "Vernon",
      "Dino"],
    answer: "Woozi",
    type: 'single',
  },
  {
    question: "In 2020, Seventeen became the first Korean artists to work with designer ___, who launched her own brand, Thief and Heist, and chose Seventeen as her next partners",
    image: q10Image,
    options: ["JIWON CHOI",
      "Minju Kim",
      "COLDFRAME",
      "Souhait",
      "Drake",
      "Jeanne Toussaint",
      "Lucien Gaillard",
      "Francesca Amfitheatrof"],
    answer: "Francesca Amfitheatrof",
    type: 'single',
  },
  {
    question: "In TRAUMA, there is a reference to Wonwoo being haunted by screenshots from his youth where he slandered...",
    image: q11Image,
    options: ["BTS",
      "EXO",
      "TWICE",
      "SNSD",
      "MAMAMOO",
      "LE SSERAFIM",
      "BIGHIT MUSIC",
      "New Jeans"],
    answer: "SNSD",
    type: 'single',
  },
  {
    question: "In Darl+ing, the line \"I want to know our problem, blood type, or DNA\" mentions associating blood type with...",
    image: q12Image,
    options: ["love",
      "personality characteristics",
      "mental disorders",
      "diseases",
      "Emotions",
      "Astrology signs",
      "romantic compatibility",
      "Zodiac signs"],
    answer: ["personality characteristics", "romantic compatibility"],
    type: 'multiple',
  },
];


const Quiz2 = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [tempSelectedAnswers, setTempSelectedAnswers] = useState<{ [key: number]: string[] }>({});
  const [selectedAnswers, setSelectedAnswers] = useState<SelectedAnswersType>({});
  const [userTextAnswer, setUserTextAnswer] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [percentageCorrect, setPercentageCorrect] = useState(0);
  const [showIntro, setShowIntro] = useState(true);

  const question = questions[currentQuestionIndex];

  const handleOptionChange = (option: string, isChecked: boolean) => {
    const currentSelections = tempSelectedAnswers[currentQuestionIndex] || [];
    if (isChecked) {
      // Add option to temporary selections
      tempSelectedAnswers[currentQuestionIndex] = [...currentSelections, option];
    } else {
      // Remove option from temporary selections
      tempSelectedAnswers[currentQuestionIndex] = currentSelections.filter((o) => o !== option);
    }
    setTempSelectedAnswers({ ...tempSelectedAnswers });
  };

  const handleSubmitAnswer = () => {
    
    if (question.type === 'multiple') {
      setSelectedAnswers({
        ...selectedAnswers,
        [currentQuestionIndex]: (tempSelectedAnswers[currentQuestionIndex] || []),
      });
    } else if (question.type === 'text') {
      setSelectedAnswers({
        ...selectedAnswers,
        [currentQuestionIndex]: userTextAnswer.trim().toLowerCase(),
      });
    }
    setShowFeedback(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setUserTextAnswer('');
      setShowFeedback(false);
      // Clear temporary selections for the next question
      setTempSelectedAnswers({});
    } else {
      calculateScore();
      setQuizCompleted(true);
    }
  };

  const renderAnswerSection = () => {
    switch (question.type) {
      case 'single':
        return (
          <>
            {question.options.map((option, index) => (
              <button className="bg-blue-500 p-2 my-1 text-white font-bold rounded" key={index} onClick={() => {
                setSelectedAnswers({ ...selectedAnswers, [currentQuestionIndex]: option });
                setShowFeedback(true); // Show feedback immediately for single-choice
              }}>
                {option}
              </button>
            ))}
          </>
        );
      case 'multiple':
        return (
          <>
            {question.options.map((option, index) => (
              <div key={index} className="flex items-center">
                <input
                  id={`option-${index}`}
                  type="checkbox"
                  name="options"
                  value={option}
                  checked={tempSelectedAnswers[currentQuestionIndex]?.includes(option) || false}
                  onChange={(e) => handleOptionChange(option, e.target.checked)}
                  className="mr-2"
                />
                <label htmlFor={`option-${index}`}>{option}</label>
              </div>
            ))}
            <button onClick={handleSubmitAnswer} className="bg-blue-500 p-2 my-1 text-white font-bold rounded submit-button mt-4" disabled={showFeedback}>
              Submit
            </button>
          </>
        );
      case 'text':
        return (
          <>
            <input
              type="text"
              value={userTextAnswer}
              onChange={(e) => setUserTextAnswer(e.target.value)}
              className="text-input mt-4"
              disabled={showFeedback}
            />
            <button
              onClick={handleSubmitAnswer}
              disabled={showFeedback || userTextAnswer.trim() === ''}
              className="submit-button mt-4 bg-blue-500 p-2 my-1 text-white font-bold rounded"
            >
              Submit
            </button>
          </>
        );
      default:
        return null;
    }
  };

  const isAnswerCorrect = (question: Question, userAnswer: string | string[]) => {
    if (question.type === 'multiple') {
      // Ensure comparison is case-insensitive and order-independent for multiple-choice answers
      const sortedUserAnswer = userAnswer instanceof Array ? userAnswer.map(a => a.toLowerCase()).sort() : [];
      const sortedCorrectAnswer = question.answer.map(a => a.toLowerCase()).sort();
      return JSON.stringify(sortedUserAnswer) === JSON.stringify(sortedCorrectAnswer);
    } else {
      // Direct, case-insensitive comparison for single-choice and text answers
      return userAnswer.toLowerCase() === question.answer.toLowerCase();
    }
  };

  const calculateScore = () => {
    let correctCount = 0;
    Object.keys(selectedAnswers).forEach(key => {
      const index = parseInt(key, 10);
      const question = questions[index];
      const userAnswer = selectedAnswers[index];

      if (isAnswerCorrect(question, userAnswer))
      {
        correctCount++;
      }
    });

    setPercentageCorrect((correctCount / questions.length) * 100);
    setQuizCompleted(true);
  };


  if (quizCompleted) {
    return <GameOverScreen percentageCorrect={percentageCorrect} />;
  }

  if (showIntro) {
    return (
      <div className="flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-2">THIS QUIZ IS SUPER SUPER HARD YOBOBOBOB</h1>
        <Image src={introImage} alt="Introduction Image" width={600} height={400} />
        <p className="text-lg mb-4">No cheating stinky ;-;.</p>
        <button
          className="px-6 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700 transition duration-300"
          onClick={() => setShowIntro(false)}
        >
          Start Quiz
        </button>
      </div>
    );
  }
  

  return (
    <div className="flex flex-col items-center">
      <Image src={question.image} alt="Question Image" width={600} height={400} layout="intrinsic" />
      <div className="text-lg font-semibold mb-2">{question.question}</div>
      {renderAnswerSection()}
      {showFeedback && (
        <div className="feedback-container">
          <div className="mt-4 text-lg">
            {isAnswerCorrect(question, selectedAnswers[currentQuestionIndex]) ? "Correct! 🎉" : "Incorrect 😢"}
          </div>
          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700"
            onClick={handleNextQuestion}
          >
            {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz2;