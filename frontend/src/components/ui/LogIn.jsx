import React from "react"
import { Link } from "react-router-dom"
const LogIn = ({text}) =>{
    return(
        <Link to="/login">
        <button  className="bg-black border-2 border-primary px-5 py-1 text-primary font-bold rounded-md">
         {text}
        </button>
        </Link>
    )
}
export default LogIn