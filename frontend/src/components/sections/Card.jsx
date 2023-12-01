import { allEducation } from "../../utils/api";
import{useState, useEffect} from "react";
import image from "../../assets/images/Amur_leopard.jpg"
import {Modal, Button} from "flowbite-react"
import { useNavigate } from "react-router-dom";
const Card= () => {
  const role = localStorage.getItem('role')
  const navigate = useNavigate()
  const [openModal, setOpenModal] = useState(false);
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

           <>

            <Button onClick={() => setOpenModal(true)} key={_id} className="m-4 relative w-64 h-64 bg-black rounded-lg overflow-hidden">
          
          <img
             src={image}
             alt={title}
             className="w-full h-full object-cover rounded-lg transition duration-500 ease-in-out transform hover:opacity-50"
           />
           <div className="absolute top-0 left-0 right-0 bottom-0 p-4 bg-black bg-opacity-75 rounded-lg transition duration-500 ease-in-out transform opacity-0 hover:opacity-100 flex flex-col justify-center items-center">
             <h2 className="text-xl font-bold mb-2 text-white">{title}</h2>
             <p className="text-gray-500 text-center">{description}</p>
           </div>
         </Button>
      {role == "admin" &&  <button className="text-white" onClick={()=>{navigate(`/education/edit/${_id}`)}}>Edit</button>}  
         <div>

      <Modal className="h-screen- h-52 bg-gray-50 pt-24" show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>{title}</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500- text-red-600 dark:text-gray-400">
        
            {description}
            </p>
          </div>
        </Modal.Body>

      </Modal>
</div>


           </>
           
         
        ))}
      </div>
      


    </div>
  );
}

export default Card;
