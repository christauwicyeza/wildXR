import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createEducation, editEducation, education } from "../utils/api";

const Create = () => {
  const role = localStorage.getItem("role");
  const navigate = useNavigate();
  const { id } = useParams();
  const [educationContent, setEducationContent] = useState({
    picture: '',
    title: "",
    summary: "",
    description: "",
  });

  useEffect(() => {
    if (id) {
      education(id).then((data) => {
        setEducationContent(data);
      });
    }
  }, [id]);

  const handleChange = (e) => {
    setEducationContent({
      ...educationContent,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createEducation(educationContent);
      console.log("Card created successfully");
      navigate("/");
    } catch (error) {
      console.error("Error creating card:", error);
      // Handle error (e.g., display an error message to the user)
    }
  };
  
  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      await editEducation(educationContent, id);
      navigate("/");
    } catch (error) {
      console.error("Error editing card:", error);
      // Handle error (e.g., display an error message to the user)
    }
  };
  return (
    <>
      {role === "admin" && (
        <div className="flex items-center justify-center min-h-screen bg-black">
          <div className="bg-black border-2 border-gray-300 rounded-md p-8 w-full max-w-lg text-gray-300">
            <div className="text-orange-300 text-bold text-3xl mb-8">
              CREATE EDUCATION CONTENT
            </div>
            <form onSubmit={id ? handleEdit : handleSubmit} className="flex flex-col">
              <input
                type="text"
                id="picture"
                name="picture"
                value={educationContent.picture}
                placeholder="Image URL"
                onChange={handleChange}
                className="w-full p-2 mb-4 bg-gray-300 text-gray-600 rounded-md"
              />
              <input
                type="text"
                id="title"
                name="title"
                value={educationContent.title}
                placeholder="Title"
                onChange={handleChange}
                className="w-full p-2 mb-4 bg-gray-300 text-gray-600 rounded-md"
              />
              <input
                type="text"
                id="summary"
                name="summary"
                value={educationContent.summary}
                placeholder="Summary"
                onChange={handleChange}
                className="w-full p-2 mb-4 bg-gray-300 text-gray-600 rounded-md"
              />
              <input
                type="text"
                id="description"
                name="description"
                value={educationContent.description}
                placeholder="Description"
                onChange={handleChange}
                className="w-full p-2 mb-4 bg-gray-300 text-gray-600 rounded-md"
              />
              <button
                onClick={id ? handleEdit : handleSubmit}
                type="submit"
                className="bg-orange-300 text-black px-4 py-2 rounded-md"
              >
                {id ? "Edit" : "Submit"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Create;
