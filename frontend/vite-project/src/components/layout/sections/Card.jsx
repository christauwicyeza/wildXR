const Card= () => {
  const cards = [
    {
      id: 1,
      image: "https://picsum.photos/200/300?random=1",
      title: "Meet the precious PANGOLIN ",
      description: "This is a description of card 1.",
    },
    {
      id: 2,
      image: "https://picsum.photos/200/300?random=2",
      title: "Card 2",
      description: "This is a description of card 2.",
    },
    {
      id: 3,
      image: "https://picsum.photos/200/300?random=3",
      title: "Card 3",
      description: "This is a description of card 3.",
    },
    {
      id: 4,
      image: "https://picsum.photos/200/300?random=4",
      title: "Card 4",
      description: "This is a description of card 4.",
    },
    {
      id: 5,
      image: "https://picsum.photos/200/300?random=5",
      title: "Card 5",
      description: "This is a description of card 5.",
    },
    {
      id: 6,
      image: "https://picsum.photos/200/300?random=6",
      title: "Card 6",
      description: "This is a description of card 6.",
    },
    {
      id: 7,
      image: "https://picsum.photos/200/300?random=7",
      title: "Card 7",
      description: "This is a description of card 7.",
    },
    {
      id: 8,
      image: "https://picsum.photos/200/300?random=8",
      title: "Card 8",
      description: "This is a description of card 8.",
    },
    {
      id: 9,
      image: "https://picsum.photos/200/300?random=9",
      title: "Card 9",
      description: "This is a description of card 9.",
    },
    {
      id: 10,
      image: "https://picsum.photos/200/300?random=10",
      title: "Card 10",
      description: "This is a description of card 10.",
    },
  ];

  return (
    <div className="bg-black">
      <h1 className="text-6xl font-bold mb-4 text-orange-300 text-center">Wildlife Diversity</h1>
      <h2 className="text-gray-500 mb-8 text-center font-bold"> <span className=" text-primay ">CONSERVATION</span> AND <span className=" text-primary">SUSTAINABILITY</span> </h2>
      <p className="text-gray-300 mb-8 text-center font-bold">Explore exceptional resources about wildlife and learn  </p>
      <div className="flex flex-wrap justify-center">
        {cards.map((card) => (
          <div key={card.id} className="m-4 relative w-64 h-64 bg-black rounded-lg overflow-hidden">
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover rounded-lg transition duration-500 ease-in-out transform hover:opacity-50"
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 p-4 bg-black bg-opacity-75 rounded-lg transition duration-500 ease-in-out transform opacity-0 hover:opacity-100 flex flex-col justify-center items-center">
              <h2 className="text-xl font-bold mb-2 text-white">{card.title}</h2>
              <p className="text-gray-500 text-center">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
