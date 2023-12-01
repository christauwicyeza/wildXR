import { useState } from "react";
import { signUp } from "../utils/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Signup = () => {
const navigate = useNavigate()
  const [userData, setUserData] = useState({
    fullName: "",
    email: "",
    password: "",
    preferences:""
  });

  const handleChange = (e)=>{
    setUserData({...userData,[e.target.name]:e.target.value})
  }

const handleSubmit = (e)=>{
e.preventDefault
signUp(userData).then(()=>{
   toast.success(" account created successfully")
    navigate("/login")
})
}

console.log("userData",userData)
  return (
    <div className="min-h-screen flex items-center justify-center bg-black" >
 <div  className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full space-y-8">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            onChange={handleChange}
            type="text"
            name="fullName"
            value={userData.fullName}
            className="border rounded-lg py-2 px-3 w-full"
            placeholder="fullName"
          />
       
        </div>
        <div>
          <input
            onChange={handleChange}
            type="text"
            name="email"
            value={userData.email}
            className="border rounded-lg py-2 px-3 w-full"
            placeholder="email"
          />
        </div>
        <div>
          <input
            onChange={handleChange}
            type="password"
            name="password"
            value={userData.password}
            className="border rounded-lg py-2 px-3 w-full"
            placeholder="password"
          />
        </div>

        <input placeholder="preference" name="preferences" value={setUserData.preferences} onChange={handleChange}/>
        
        <button
          onClick={handleSubmit}
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mt-4 w-full"
        >
         signUp
        </button>
       
      </form>
    </div>
    </div>
   
  );
};
export default Signup;
