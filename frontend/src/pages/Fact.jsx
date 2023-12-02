import React, { useEffect, useState } from 'react';
import { allFacts, createFact } from '../utils/api';
import { toast } from "react-toastify";
const Fact = () => {
    const token = localStorage.getItem("token")
  const [facts, setFacts] = useState();
 const [newFact,  setNewFact] = useState(
    {content:""}
 )

const handleChange = (e)=>{
setNewFact({...newFact,[e.target.name]: e.target.value})
}

const handleSubmit = (e)=>{
e.preventDefault();
if(!token){
    toast.warn(" You have to log in first")
}
else {createFact(newFact).then(()=>{
    toast.success(" Posted Successfully")
})}
}


  useEffect(()=>{
    allFacts().then((data)=>{
        setFacts(data)
    })
  },[])

  return (
    <div className="py-24 bg-black text-gray-300 text-center">
      <div className="text-orange-300 text-4xl mb-8">LEAVE A Fact </div>
<form onSubmit={handleSubmit}>
<textarea
      value={newFact.content}
     name="content"
     onChange={handleChange}
        placeholder="Add a new fact..."
        rows="4"
        cols="50"
        className="bg-red-200 text-gray-800 px-4 py-2 rounded-md mx-auto mb-4"
      ></textarea>

      <br />

      <button onClick={handleSubmit}  className="bg-orange-300 text-black px-4 py-2 rounded-md mb-4">
        Add Fact
      </button>
</form>
     

      <div>
        <h1 className="text-orange-300">Facts</h1>
        <ul>
         
          {facts?.map(({content})=>{
            return (
                <>
                 <div class="max-w-md mx-auto bg-primary rounded-md overflow-hidden shadow-lg my-8 ">
                     <h1 class="text-2xl font-bold text-black p-4"> {content} </h1>
                </div>

                </>
            )
          })}
        </ul>
      </div>
    </div>
  );
};

export default Fact;
