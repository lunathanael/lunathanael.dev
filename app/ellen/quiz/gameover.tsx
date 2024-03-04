import Image from 'next/image';
import gameoverImage from '../../../public/seventeen/gameoverImage.png';

interface GameOverScreenProps {
    percentageCorrect: number;
  }
  
  const GameOverScreen: React.FC<GameOverScreenProps> = ({ percentageCorrect }) => {
    return (
      <div className="flex flex-col items-center justify-center">
        <Image src={gameoverImage} alt="Gameover Image" width={600} height={400} />
        <h2 className="text-2xl font-bold">Seventeen Quiz over!!</h2>
        <p className="text-xl">You got  {percentageCorrect}% correct!</p>
      </div>
    );
  };
  
  export default GameOverScreen;
  