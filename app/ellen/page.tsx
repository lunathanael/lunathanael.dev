// pages/welcome.tsx (for TypeScript) or pages/welcome.js (for JavaScript)

import Image from 'next/image';
import Link from 'next/link';
import welcomeImage from '../../public/seventeen/q1.png'; // Adjust the path to your image

const WelcomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-2">Welcome to Our Site!</h1>
      <Image src={welcomeImage} alt="Welcome" width={600} height={400} />
      <p className="text-lg mb-4">
        Explore our site to learn more about SEVENTEEN and test your knowledge with our quizzes.
      </p>
      <div className="flex gap-4">
        <Link href="/ellen/quiz" passHref>
          <button className="px-6 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700 transition duration-300">
            Go to Quiz
          </button>
        </Link>
        <Link href="/about" passHref>
          <button className="px-6 py-2 bg-green-500 text-white font-bold rounded hover:bg-green-700 transition duration-300">
            About Us
          </button>
        </Link>
        {/* Add more links/buttons as needed */}
      </div>
    </div>
  );
};

export default WelcomePage;
