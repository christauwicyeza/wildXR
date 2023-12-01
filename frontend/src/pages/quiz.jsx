import React from 'react';
import dummy from "../assets/images/humpbackWhale.jpeg";

const QuizPage = () => {
  return (
    <div className="bg-black text-gray-500 pt-24 min-h-screen p-8">
      <div className="max-w-4xl flex items-center justify-center">
        <div>
          <h1 className="text-xl font-bold mb-4 text-orange-300">Kids Wildlife Fun</h1>
          <p className="mb-8 text-right">
            Explore exciting wildlife games and quizzes designed just for kids to have fun and learn.
          </p>

          {/* Section 1: Game */}
          <div className="flex mb-8 ml-0">
            <div className="max-w-md">
              <img src={dummy} alt="Game Image 1" className="mb-4 rounded-md w-32 h-auto" />
            </div>

            <div className="max-w-md ml-4 text-left">
              <h2 className="text-2xl font-semibold mb-2">Wildlife Adventure Game</h2>
              <p className="mb-4">
                Embark on an exciting wildlife adventure with our fun game. Explore the jungle, meet animals, and complete missions!
              </p>
              <button className="bg-orange-300 text-black px-4 py-2 rounded-md">
                Play
              </button>
            </div>
          </div>

          {/* Section 2: Quiz */}
          <div className="flex mb-8 mr-0">
            <div className="max-w-md text-right">
              <div className="mr-auto">
                <h2 className="text-2xl font-semibold mb-2">Animal Kingdom Quiz 1</h2>
                <p className="mb-4">Test your knowledge about wildlife in this interactive quiz. Are you ready to become a wildlife expert?</p>
                <button className="bg-orange-300 text-black px-4 py-2 rounded-md">
                  Take Quiz
                </button>
              </div>
              <img src={dummy} alt="Quiz Image 1" className="mb-4 rounded-md w-32 h-auto" />
            </div>
          </div>

          {/* Section 3: Game */}
          <div className="flex mb-8 ml-0">
            <div className="max-w-md">
              <img src={dummy} alt="Game Image 2" className="mb-4 rounded-md w-32 h-auto" />
            </div>

            <div className="max-w-md ml-4 text-left">
              <h2 className="text-2xl font-semibold mb-2">Safari Adventure Game</h2>
              <p className="mb-4">Embark on a virtual safari, spot wildlife, and complete challenges. An adventure awaits!</p>
              <button className="bg-orange-300 text-black px-4 py-2 rounded-md">
                Play
              </button>
            </div>
          </div>

          {/* Section 4: Quiz */}
          <div className="flex mb-8 mr-0">
            <div className="max-w-md text-right">
              <div className="mr-auto">
                <h2 className="text-2xl font-semibold mb-2">Nature Quiz</h2>
                <p className="mb-4">Discover fascinating facts about nature and wildlife in this engaging quiz. Are you ready to explore?</p>
                <button className="bg-orange-300 text-black px-4 py-2 rounded-md">
                  Take Quiz
                </button>
              </div>
              <img src={dummy} alt="Quiz Image 2" className="mb-4 rounded-md w-32 h-auto" />
            </div>
          </div>

          {/* Continue alternating game and quiz sections as needed */}
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
