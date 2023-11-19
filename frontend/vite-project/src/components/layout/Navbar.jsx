import { links } from "../../data/links"
const Navbar=()=>{
    return (
        <div className="flex bg-black text-white items-center justify-between px-10 py-5 gap-[512px] fixed w-full z-10">
            <h1 className="text-5xl font-extrabold">Wild<span className="text-primary text-4xl">XR</span></h1>
            <div className=" flex items-center gap-24 ">
               
               <div className= " flex items-center gap-5 text-primary " >
                {links.map(({link})=>{
return(
    <p className="hover:text-white text-base font-extrabold">{link}</p>
)
                })}
               </div>
               <button className="bg-white border-2 border-primary px-5 py-1 text-primary font-bold rounded-md">Log In</button>
            </div>
         
        </div>
    )
}
export default Navbar