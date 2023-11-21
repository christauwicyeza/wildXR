
const Card = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 text-black">Wildlife Diversity</h1>
      <p className="text-gray-500 mb-8">Explore our collection of educational resources about wildlife and learn more about the importance of conservation and sustainability.</p>
      <div className="flex flex-wrap justify-center">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="m-4 relative">
            <img
              src={`https://picsum.photos/200/300?random=${i}`}
              alt={`Card ${i}`}
              className="w-full h-full object-cover rounded-lg transition duration-500 ease-in-out transform hover:opacity-50"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-white bg-opacity-75 rounded-lg transition duration-500 ease-in-out transform opacity-0 hover:opacity-100">
              <h2 className="text-xl font-bold mb-2 text-black">Card {i}</h2>
              <p className="text-gray-500">This is a description of card {i}.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
