import {useState} from "react"
import { signIn } from "../utils/api"
import {useNavigate} from "react-router-dom"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
const Login = () =>{
    const navigate = useNavigate()
    const [userData,setUserData] = useState({email:"",password:""})
const handleChange = (e) =>{
    setUserData({...userData, [e.target.name]: e.target.value})
}
const handleSubmit = (e)=>{
e.preventDefault();
signIn(userData).then((data)=>{
  console.log("dataa",data)
    localStorage.setItem("token",data.token)
    localStorage.setItem("role",data.user.role)
    navigate("/")
}).catch((error)=>{{
toast.warn("Invalid user");
}})
}

return(
        <div className="min-h-screen flex items-center justify-center bg-black">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full space-y-8">
            <h2 className="text-2xl font-bold text-gray-800">Login</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <input placeholder="email" onChange={handleChange} type="text" name="email" value={userData.email}  className="border rounded-lg py-2 px-3 w-full" />
              </div>
              <div>
                <input placeholder="password" onChange={handleChange} type="password" name="password" value={userData.password} className="border rounded-lg py-2 px-3 w-full" />
             
              
              </div>
              <button onClick={handleSubmit} type="submit" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mt-4 w-full">Login</button>
            </form>
          <h1 classname="text-white">no acount <Link to="/signup">signup</Link></h1>
          </div>
        </div>
      );
    }
    

export default Login