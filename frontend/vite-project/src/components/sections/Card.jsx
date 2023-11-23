import { allEducation } from "../../utils/api";
import{useState, useEffect} from "react";
import image from "../../assets/images/Amur_leopard.jpg"


const Card= () => {
const [educationContent, setEducationContent] = useState([])
  useEffect(()=>{allEducation().then((data)=>{
    setEducationContent(data)
  })})

  return (
    <div className="bg-black" id="education">
      <h1 className="text-6xl font-bold mb-4 text-orange-300 text-center">WILDLIFE DIVERSITY</h1>
      <h2 className="text-gray-500 mb-8 text-center font-bold"> <span className=" text-primay ">CONSERVATION</span> AND <span className=" text-primary">SUSTAINABILITY</span> </h2>
      <p className="text-gray-300 mb-8 text-center font-bold">Explore exceptional resources about wildlife and learn  </p>
      <div className="flex flex-wrap justify-center">
        {educationContent?.map(({_id,title,description}) => (
          <div key={_id} className="m-4 relative w-64 h-64 bg-black rounded-lg overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover rounded-lg transition duration-500 ease-in-out transform hover:opacity-50"
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 p-4 bg-black bg-opacity-75 rounded-lg transition duration-500 ease-in-out transform opacity-0 hover:opacity-100 flex flex-col justify-center items-center">
              <h2 className="text-xl font-bold mb-2 text-white">{title}</h2>
              <p className="text-gray-500 text-center">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
