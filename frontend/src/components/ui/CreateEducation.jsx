import { Link } from "react-router-dom"
const CreateEducation = ({text}) =>{
    return(
        <>
       <Link to="/Create"> <button className="bg-red-200">{text}</button></Link>
        </>
    )
}
export default CreateEducation