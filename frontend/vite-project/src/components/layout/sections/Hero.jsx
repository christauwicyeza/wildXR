import image from "../../../assets/images/wild5.jpg";
const Hero = ()=>{
return(
    <div>
        <div className=' flex  h-full w-full relative py-20 '>
          <img src={image} className="w-full h-full object-cover absolute mix-blend-overlay"/>
          <div className="p-24">
            <h1 className="text-white text-8xl text-center font-bold">Wild<span className="text-black text-7xl">XR</span> </h1>
            <div className="py-10"><h2 className="text-white text-3xl text-center font-light ">Welcome to Wildlife XR – your gateway to immersive encounters with the natural world through cutting-edge Extended Reality (XR) experiences. Dive into virtual habitats, witness wildlife up close, and join us in fostering environmental awareness. Explore, learn, and be inspired like never before!</h2></div>
            <div className="flex justify-center gap-3 mt-5"><button className=" border-2  border-black px-5 py-1 text-black font-bold ">About Us</button> <button className="border-2 border-primary px-5 py-1 text-primary font-bold ">Join Us </button></div>
          </div>
      </div>
    </div>
)
};
export default Hero