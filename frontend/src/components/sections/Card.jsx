import { allEducation } from "../../utils/api";
import { useState, useEffect } from "react";
import { Modal, Button } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import React from "react";

const Card = () => {
  const role = localStorage.getItem("role");
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState(null);
  const [educationContent, setEducationContent] = useState([]);

  useEffect(() => {
    allEducation().then((data) => {
      setEducationContent(data);
    });
  }, []);

  const openModalWithId = (cardId) => {
    setSelectedCardId(cardId);
    setOpenModal(true);
  };

  return (
    <div className="bg-black py-8"  id="education">
      <h1 className="text-6xl font-bold mb-4 text-orange-300 text-center">
        WILDLIFE DIVERSITY
      </h1>
      <h2 className="text-gray-500 mb-8 text-center font-bold">
        <span className="text-primay">CONSERVATION</span> AND{" "}
        <span className="text-primary">SUSTAINABILITY</span>
      </h2>
      <p className="text-gray-300 mb-8 text-center font-bold">
        Explore exceptional resources about wildlife and learn{" "}
      </p>
      <div className="flex flex-wrap justify-center">
        {educationContent?.map(({ _id, title, description, summary, picture }, index) => (
          <React.Fragment key={_id}>
            <Button
              onClick={() => openModalWithId(_id)}
              className="m-4 relative w-64 h-64 bg-black rounded-lg overflow-hidden"
            >
              <img
                alt={title}
                src={picture}
                className="w-full h-full object-cover rounded-lg transition duration-500 ease-in-out transform hover:opacity-50"
              />
              <div className="absolute top-0 left-0 right-0 bottom-0 p-4 bg-black bg-opacity-75 rounded-lg transition duration-500 ease-in-out transform opacity-0 hover:opacity-100 flex flex-col justify-center items-center">
                <h2 className="text-xl font-bold mb-2 text-white">{title}</h2>
                <p className="text-gray-300 text-center">{summary}</p>
              </div>
            </Button>
            {role === "admin" && (
              <button
                className="text-white"
                onClick={() => {
                  navigate(`/education/edit/${_id}`);
                }}
              >
                Edit
              </button>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Modal component */}
      <Modal
        className="h-screen bg-black bg-opacity-70 pt-24"
        show={openModal}
        onClose={() => setOpenModal(false)}
      >
        <Modal.Header>
          <div className="flex justify-center text-center text-orange-300 font-bold text-4xl items-center">
            {selectedCardId &&
              educationContent.find((item) => item._id === selectedCardId)?.title}
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-800 dark:text-gray-400">
              {selectedCardId &&
                educationContent.find((item) => item._id === selectedCardId)?.description}
            </p>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Card;
