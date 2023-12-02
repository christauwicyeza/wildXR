import React from 'react';
import dummy from "../assets/images/humpbackWhale.jpeg";

const QuizPage = () => {
  const cards = [
    {
      image: dummy,
      title: 'BIG CATS!',
      description:
        'Do you know your big cats?',
      url: 'https://www.wwf.org.uk/learn/quizzes/big-cats-quiz/',
    },
    {
      image: dummy,
      title: 'ANIMAL POO',
      description:
        'Do you know your animal poo?',
      url: 'https://www.wwf.org.uk/learn/quizzes/',
    },
    {
      image: dummy,
      title: 'MORE QUIZES',
      description:
        'More fun exciting quizzes to do .',
      url: "https://www.wwf.org.uk/learn/quizzes/",
    },
    
  ];

  return (
    <div className="bg-black py-8">
    <div className="text-orange-300 text-center py-12">
      <h1 className="text-6xl text-orange-300 font-bold">PLAY AND LEARN</h1>
      <p className="text-gray-300 text-ms mt-4">
        Join us in protecting the world's wildlife and wild places.
      </p>
    </div>
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 py-4">
      {cards.map((card) => (
        <div key={card.title} className="bg-black rounded-lg overflow-hidden shadow-lg flex flex-row justify-between">
          <img src={card.image} alt={card.title} className="w-1/2 h-4/5 object-cover" />
          <div className="p-4 w-1/2">
            <h2 className="text-xl font-bold mb-2 text-orange-300">{card.title}</h2>
            <p className="text-gray-300 text-base">{card.description}</p>
            <a href={card.url} target="_blank" rel="noopener noreferrer" className=" flex-block text-center bg-orange-300 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded flex justify-center mt-4">
              play
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
  
  );
};

export default QuizPage;
