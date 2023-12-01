import { Link } from "react-router-dom"

const Home = ({text}) =>{
    return(
        <Link to="/"  className="hover:text-white text-sm font-extrabold">{text}</Link>
    )
 
}
export default Home