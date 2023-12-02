import React from "react";
import Elephant from "../assets/images/africanElephant.jpg";
import Gorilla from "../assets/images/gorilla.jpg";
import wcs from "../assets/images/wcs.jpg";
import wwf from "../assets/images/wwf.jpeg";
import nature from "../assets/images/naturec.jpg";
import awf from "../assets/images/awf.jpg";

const Donate = () =>{
  const cards = [
    {
      image: Elephant,
      title: 'Save the Elephants',
      description:
        'The African elephant population has declined by 97% in the last century. Your donation will help protect these majestic animals.',
      url: 'https://www.savetheelephants.org/',
    },
    {
      image: Gorilla,
      title: 'Dian Fossey Gorilla Fund',
      description:
        'The Dian Fossey Gorilla Fund is dedicated to the conservation and protection of gorillas and their habitats in Africa.',
      url: 'https://gorillafund.org/',
    },
    {
      image: wcs,
      title: 'Wildlife Conservation Society',
      description:
        'The Wildlife Conservation Society works to save wildlife and wild places worldwide through science, conservation action, education, and inspiring people to value nature.',
      url: 'https://www.wcs.org/',
    },
    {
      image: wwf,
      title: 'World Wildlife Fund',
      description:
        'The World Wildlife Fund is the world’s leading conservation organization, working in 100 countries and supported by more than one million members in the United States.',
      url: 'https://www.worldwildlife.org/',
    },
    {
      image: nature,
      title: 'The Nature Conservancy',
      description:
        'The Nature Conservancy is a global environmental nonprofit working to create a world where people and nature can thrive.',
      url: 'https://www.nature.org/',
    },
    {
      image: awf,
      title: 'African Wildlife Foundation',
      description:
        'The African Wildlife Foundation is the leading international conservation organization focused solely on Africa’s wildlife and wild lands.',
      url: 'https://www.awf.org/',
    },
  ];

  return (
    <div className="bg-black">
      <div className="text-orange-300 text-center py-24">
        <h1 className="text-6xl text-orange-300 font-bold">JOIN US</h1>
        <p className="text-gray-300 text-ms mt-4">
          Join us in protecting the world's wildlife and wild places.
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 py-4">
        {cards.map((card) => (
          <div key={card.title} className="bg-black rounded-lg overflow-hidden shadow-lg flex flex-col justify-between">
            <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2 text-orange-300">{card.title}</h2>
              <p className="text-gray-300 text-base">{card.description}</p>
            </div>
            <div className="p-4">
              <a href={card.url} target="_blank" rel="noopener noreferrer" className=" flex-block text-center bg-orange-300 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded flex justify-center">
                Donate
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

}
 export default Donate;