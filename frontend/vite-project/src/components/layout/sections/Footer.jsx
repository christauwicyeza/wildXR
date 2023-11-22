
const Footer = ()=>{
  return (
    <div className=" flex  pb-10 bg-black text-gray-300 h-full w-full justify-center items-center ">
      <div className=" flex text-center items-center justify-between">
        <div>
          <h3 className="text-6xl font-bold justify-center text-center items-center text-orange-300">CONTACT</h3>
          <p className="mt-2 justify-center items-center text-center text-sm">JOIN US ON AN <span className="text-primary ">ADVENTURE</span> OF A LIFTIME!</p>
          <p className="mt-4 py-6 text-center justify-center items-center text-sm">
            Kk 694 Street, Kicukiro , Kigali, Rwanda.
            <br />
            Tel: +250 783 731 214
            <br />
            Email: c.uwicyeza@alustudent.com
          </p>
        <div className="text-sm justify-center text-center items-center" >
          <p className="mb-2"> &copy; WildXR <span className=" text-xs"> 2023 </span>. All Rights Reserved.</p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
