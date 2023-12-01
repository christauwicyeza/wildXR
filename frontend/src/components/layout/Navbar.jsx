import { links } from "../../data/links";
import { Link } from "react-scroll";
import LogIn from "../ui/LogIn";
import { useNavigate } from "react-router-dom";
import Home from "../ui/Home";
import CreateEducation from "../ui/CreateEducation";
const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role")
  function logout(){
    localStorage.clear();
    navigate("/");
  }
  return (
    <div className="flex bg-black text-white items-center justify-between px-10 py-5 gap-[512px] fixed w-full z-10">
      <Link to="fact" className="text-5xl font-extrabold">
        Wild<span className="text-primary text-4xl">XR</span>
      </Link>
      <div className=" flex items-center gap-24 ">
        <div className=" flex items-center gap-5 text-primary ">
          <Home text="HOME"/>
          {links.map(({ link, path }) => {
            return (
              <Link
                activeClass="active"
                smooth="true"
                offset={-70}
                duration={500}
                to={path}
                className="hover:text-white text-sm font-extrabold"
              >
                {link}
              </Link>
            );
          })}
        </div>
       {role == "admin" && <CreateEducation text="Create Education "/>}
      {token? <button onClick={logout } className="bg-black border-2 border-primary px-5 py-1 text-primary font-bold rounded-md">logout</button> : <LogIn text="Login"/>}
      </div>
    </div>
  );
};
export default Navbar;
