"use client";

import { useState } from 'react';
import Head from 'next/head';


const MathRizz = () => {
  const texts = [
    "If you were a triangle, you’d be acute-ly attractive.",
    "If you were a polygon, you’d be a-cute one.",
    "Are you a 90-degree angle? Because you are looking right for me.",
    "Can I be your integral so I can be the area under your curves?",
    "Can I be your tangent line? Because I’d love to touch your curves at just one point.",
    "Are you a 45-degree angle? Because you’re acute-y attractive.",
    "Excuse me, but are you a decimal? Because you’re never-ending and always repeating in my mind.",
    "Can I study your curves and angles? Because geometry has never been this enticing before.",
    "Is your name Pythagoras? Because you’re making me feel some serious triangle inequality.",
    "if X+U=15, I would guess X is 5 because ur a 10",
    "Math is so tiring. It’s always about x and y. Why can’t it be about U and I?",
    "If we were algebraic expressions, I’d like to simplify us into one perfect equation.",
    "If we were vectors, I’d make sure our paths always intersect.",
    "If I were a function, I’d be monotonically increasing whenever you’re around.",
    "If you were a function, I’d like to be your domain, so I’m the only one you operate on.",
    "Excuse me, but can you help me find the coefficient of friction between you and me? Because we have serious chemistry.",
    "If you were a function, I would be your derivative so that I could lie tangent to your curves",
    "Can I be your limit as x approaches infinity? Because I’ll always strive to get closer to you.",
    "Are you a non-zero complex number? Because my imaginary world revolves around you.",
    "Excuse me, but I think you dropped something: my jaw when I saw your exponential curves.",
    "Can I be your derivative? Because I want to be the rate of change in your life.",
    "If I were a function, I’d be monotonically increasing whenever you’re around.",
    "Are you a fraction? Because you’re the missing piece in my life.",
    "Can I be your cosine? Because I’ll always be adjacent to your heart.",
    "Excuse me, but can you help me find the coefficient of friction between you and me? Because we have serious chemistry.",
    "If you were a matrix, I’d love to be the determinant of your heart.",
    "Are you a math test? Because I’d love to solve you, even if it takes all night."
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
  };

  // Function to go to the previous text
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + texts.length) % texts.length);
  };

  return (
    <>
      <Head>
        <title>MathRizz</title>
        <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet" />
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <div className="text-center mb-4">
          <p className="font-pacifico text-4xl" style={{ fontFamily: '"Pacifico", cursive' }}>{texts[currentIndex]}</p>
        </div>
        <div className="flex gap-4">
          <button onClick={handlePrevious} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Left</button>
          <button onClick={handleNext} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700">Right</button>
        </div>
      </div>
      <style jsx>{`
        .font-pacifico {
          font-size: 2rem; /* Larger font size */
        }
      `}</style>
    </>
  );
};

export default MathRizz;
