"use client";

// pages/ThoughtsStream.tsx
import { useState } from 'react';


const prewrittenThoughts = [
    "I love Yuna so so much!!",
    "I'm so lucky to have her.",
    "She's my everything, and my goal and target.",
    "I wish she could see herself from my eyes, then she would realize how beautiful she is.😍😍",
    "I wonder if my Yobo has ate today.🥺🥺🥺",
    "Her ass is very big🍑",
    "I adore her...",
    "400 days is coming up 🎉🎉🎉",
    "I hope my Yobo won't ever regret dating me.",
    "I have to work hard so she can live the comfortable life she wants, and have everything.",
    "She deserves the world, as she is my world",
    "I want to slap that ass😉😉👏",
    "I gotta learn korean, so I can say some romantic things to her🤗🤗",
    "I should plan a date and make it super super romantic and fancy, but I don't really know how to plan one she'll like.",
    "I don't really know her that well, I hope we can get to know each other so well in the future, I want to know everything she likes and hates, so I can make her never have to cry again.",
    "Here's a rose, just for you baby girl 🌹",
    "My yobo is so cute when she's grumpy 😡😡😡",
    "Sometimes, I'm worried that one day she'll stop loving me, and it scares me a lot.",
    "I always want to stay strong for her, but sometimes I act very stupid and forget to tell her and affirm her",
    "my thoughts are kind of jumbled, I wish I could communicate with her better",
    "She's the cutest girl I've ever met and ever will",
    "I love my yobo, not just because she's the most beautiful girl to me, and not just because of how she always sets a fire in my heart when she walks into the room.",
    "I love her because she's always on my side, and always there for me, and always understands me, and talks to me, and never talks about me behind my back",
    "She's my lifelong friend and partner, my best friend, the person I feel like I can share everything with, and I feel safest with.",
    "I hope she wants to spend the rest of her life with me, everyday in my classes I daydream that I'm with her",
    "I always dream of going on a family vacation with her, I think my life would be complete if we could go on some swimming trip or camping trip or concert together, I'll be so happy.",
    "She makes me feel so warm inside.",
    "That's all the thoughts I could think of so far, Call me shawty and lets talk😎😎😎😎",
  ];

  

const ThoughtsStream = () => {
  const [thoughts, setThoughts] = useState<string[]>([]);
  const [newThought, setNewThought] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let thoughtToAdd = newThought.trim();
    if (!thoughtToAdd) {
      thoughtToAdd = prewrittenThoughts[currentIndex];
      setCurrentIndex((currentIndex + 1) % prewrittenThoughts.length);
    }
    setThoughts([...thoughts, thoughtToAdd]);
    setNewThought('');
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Our Thoughts</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          type="text"
          value={newThought}
          onChange={(e) => setNewThought(e.target.value)}
          placeholder="Leave blank for Nate's thoughts"
          className="mb-4 p-3 border rounded w-64"
        />
        <button type="submit" className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
          Add a Thought
        </button>
      </form>
      <div className="thoughts-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {thoughts.map((thought, index) => (
          <div key={index} className="p-4 bg-gray-100 rounded shadow" style={{ transform: `rotate(${index % 2 === 0 ? '-1' : '1'}deg)` }}>
            {thought}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThoughtsStream;
