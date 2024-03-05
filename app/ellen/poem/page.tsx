"use client";


import Head from 'next/head';
import { useEffect, useState } from 'react';

const poems = [
  {
    title: "The lovely girl",
    author: "Silly goober",
    lines: [
        "There was once a silly boy and a cute girl,",
        "they sat in the AP stats class:",
        "One focused on studying...",
        "the other, liked to sleep and goof off.",
        "A day came, where seats were swapped.",
        "The boy thought not much of it,",
        "he sat next to a cute girl he thought he would never have a chance with.",
        "She was a goddess to him, someone he could never reach.",
        "They talked, as classmates do, chattering about the class and their day.",
        "Little did they know they would spend the rest of their days together.",
        "The goober and the cutie",
        "an interesting duo, for sure.",
        "But, he was willing to give her his everything,",
        "Her perfect soft hands opened his broken shielded heart",
        "she held the heart in her arms, to protect it from all the danger.",
        "He struggled, he wanted to change for her,",
        "he knew that the person he was would never be the right guy for her.",
        "He wanted to change himself, for him, to be a better match for her.",
        "He was scared of losing her, but in this process, he lost her even more",
        "...",
        "The days pass, and they like each other more and more.",
        "He viewed her as something more than just a wonderful beautiful kind cutie,",
        "she was his everything, his goal in life, and his target to reach.",
        "She was his motivation for living life."
    ]
  },
  {
    title: "The hungry hippo",
    author: "Ellen so",
    lines: [
        "Ellen seo liked to eat.",
        "She also likes to dance to a beat.",
        "One day a hippo came, red as a beet.",
        "She knew that he was ready to eat",
        "Read, the seed for the beet was eaten.",
        "Yuna greeted him, for he was the king.",
        "Next week, came a fleet of sheep,",
        "She knew she couldn't eat the fleet.",
        "It was simply a hard task for her to beat...",
        "At least by herself, a queen.",
        "She climbed up a tree to weep, but what happened next she expected the least...",
        "A handsome prince, with lots of meat, came to her feet.",
        "His name, Nate, brought heat to her heart.",
        "She came to his side, and asked for his seed.",
        "The hippo, hungry as king, asked for tea.",
        "The prince told him to beat, and never ask thee.",
        "Thus the prince and the princess, came to be."
    ]
  },
];

const PoemDisplay = () => {
  const [currentPoemIndex, setCurrentPoemIndex] = useState(0);
  const [currentLine, setCurrentLine] = useState(0);
  const [isPoemComplete, setIsPoemComplete] = useState(false);

  const calculateDelay = (lineLength: number) => {
    const baseDelayPerCharacter = 75; // milliseconds per character
    const minimumDelay = 1000; // minimum delay of 3 seconds
    const calculatedDelay = lineLength * baseDelayPerCharacter;
    return Math.max(calculatedDelay, minimumDelay);
  };

  useEffect(() => {
    if (isPoemComplete) return;

    const currentLineLength = poems[currentPoemIndex].lines[currentLine].length;
    const delay = calculateDelay(currentLineLength);

    const timer = setInterval(() => {
      setCurrentLine((currentLine) => {
        if (currentLine < poems[currentPoemIndex].lines.length - 1) {
          return currentLine + 1;
        } else {
          setIsPoemComplete(true);
          return currentLine;
        }
      });
    }, delay);

    return () => clearInterval(timer);
  }, [currentPoemIndex, isPoemComplete, currentLine]);

  const goToNextPoem = () => {
    if (currentPoemIndex < poems.length - 1) {
      setCurrentPoemIndex(currentPoemIndex + 1);
      setCurrentLine(0);
      setIsPoemComplete(false);
    }
  };

  const goToPreviousPoem = () => {
    if (currentPoemIndex > 0) {
      setCurrentPoemIndex(currentPoemIndex - 1);
      setCurrentLine(0);
      setIsPoemComplete(false);
    }
  };

  const { title, author, lines } = poems[currentPoemIndex];

  return (
    <div className="min-h-screen from-indigo-500 to-purple-500 flex items-center justify-center p-4">
      <Head>
        <title>{title}</title>
      </Head>
      <div className="max-w-lg bg-white p-8 rounded-lg shadow-lg opacity-90">
        <h1 className="text-3xl font-bold text-center mb-4">{title}</h1>
        <p className="text-xl text-center italic mb-6">- {author} -</p>
        <div className="space-y-4">
          {lines.map((line, index) => (
            <p key={index} className={`${isPoemComplete ? 'opacity-100' : 'transition-opacity duration-1000'} ${index === currentLine ? 'opacity-100' : isPoemComplete ? 'opacity-100' : 'opacity-0'}`}>
              {line}
            </p>
          ))}
        </div>
        {isPoemComplete && (
          <div className="flex justify-between mt-4">
            <button onClick={goToPreviousPoem} className={`px-4 py-2 text-white rounded hover:bg-blue-700 transition duration-300 ${currentPoemIndex === 0 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500'}`} disabled={currentPoemIndex === 0}>← Previous</button>
            <button onClick={goToNextPoem} className={`px-4 py-2 text-white rounded hover:bg-green-700 transition duration-300 ${currentPoemIndex === poems.length - 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-green-500'}`} disabled={currentPoemIndex === poems.length - 1}>Next →</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PoemDisplay;