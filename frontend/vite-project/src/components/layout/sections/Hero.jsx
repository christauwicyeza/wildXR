import image from "../../../assets/images/wild5.jpg";
const Hero = ()=>{
return(
    <div>
        <div className=' flex  h-full w-full relative py-8 '>
        <div className="w-full h-full  flex items-center bject-cover absolute mix-blend-overlay justify-center text-center">
      <div className="background">
        <div className="background-image z-10"></div>
        <div className="background-image z-20"></div>
      </div>
    </div>
    {/* <img src={image} className="w-full h-full object-cover absolute mix-blend-overlay"/> */}
          <div className="h-screen w-screen flex items-center justify-center text-center">
            <div className="p-24 ">
            <h1 className="text-white text-8xl text-center font-bold">WILD<span className="text-black text-7xl">XR</span> </h1>
            <div className="py-10"><h2 className="text-white text-xl text-center font-light bg-yello">Embark on an extraordinary journey with us,
        <br />
        where the realms of wildlife and conservation come to life.
        <br />
        Immerse yourself in captivating experiences
        <br />
        that forge a profound connection with our planet's diverse ecosystems.</h2></div>
            <div className="flex justify-center gap-3 mt-5"><button className=" border-2  border-black px-5 py-1 text-black font-bold ">About Us</button> <button className="border-2 border-primary px-5 py-1 text-primary font-bold ">Join Us </button></div>
          </div>
        </div>
      </div>
    </div>
)
};
export default Hero