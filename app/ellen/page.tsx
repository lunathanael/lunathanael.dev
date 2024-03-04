import Image from 'next/image';
import Link from 'next/link';
import welcomeImage from '../../public/seventeen/welcomeImage.jpg';

const WelcomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-2">Welcome to YUNA LAND!</h1>
      <Image src={welcomeImage} alt="Welcome" width={600} height={400} />
      <p className="text-lg mb-4">
        Hi cutie, explore the site to find some cool things I made for my yobo, whos is super cute and hawt.
      </p>
      <div className="flex gap-4">
        <Link href="/ellen/quiz" passHref>
          <button className="px-6 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700 transition duration-300">
            세븐틴 QUIZ 
          </button>
        </Link>
        <Link href="/ellen/math" passHref>
          <button className="px-6 py-2 bg-green-500 text-white font-bold rounded hover:bg-green-700 transition duration-300">
            Math Rizz😎😘
          </button>
        </Link>
        <Link href="/ellen/math" passHref>
          <button className="px-6 py-2 bg-green-500 text-white font-bold rounded hover:bg-green-700 transition duration-300">
            Thoughts about yuna🤔❤️‍🔥
          </button>
        </Link>
        <Link href="/ellen/math" passHref>
          <button className="px-6 py-2 bg-green-500 text-white font-bold rounded hover:bg-green-700 transition duration-300">
            Poem for YOBO✍️🥰
          </button>
        </Link>
      </div>
    </div>
  );
};

export default WelcomePage;
