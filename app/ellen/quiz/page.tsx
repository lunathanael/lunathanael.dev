import Quiz from './quiz'; // Adjust the path as necessary

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold text-center my-4">Quiz App</h1>
      <Quiz />
    </div>
  );
}
