import { links } from "../../data/links";
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <div className="flex bg-black text-white items-center justify-between px-10 py-5 gap-[512px] fixed w-full z-10">
      <h1 className="text-5xl font-extrabold">
        Wild<span className="text-primary text-4xl">XR</span>
      </h1>
      <div className=" flex items-center gap-24 ">
        <div className=" flex items-center gap-5 text-primary ">
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
        <button className="bg-black border-2 border-primary px-5 py-1 text-primary font-bold rounded-md">
          Log In
        </button>
      </div>
    </div>
  );
};
export default Navbar;
