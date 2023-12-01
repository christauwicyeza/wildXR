import Image1 from "../../assets/images/lionHd.jpg";
import Image2 from '../../assets/images/birdhd.jpg';
import Image3  from "../../assets/images/R.jpeg"
import { Link } from "react-router-dom";
const Engage = () => {
  return (
    <div className="bg-cover bg-black py-8 bg-center" id="community">
      <div className="bg-black bg-opacity-75">
        <h2 className="text-6xl font-bold mb-4 text-center text-orange-300 uppercase">COMMUNITY ENGAGEMENT</h2>
        <h3 className="text-lg font-medium mb-8 text-center text-gray-300 uppercase">
          ENGAGE WITH US AND LET <span className="text-primary">YOUR VOICE BE HEARD!</span>
        </h3>
        <p className="text-gray-300 text-center mb-8"> Join our wildlife community! Explore, learn, and contribute. Ask questions, share facts, and make an impact. Your voice matters! </p>    
       <div className="flex justify-center space-x-8">
          <Link to="question"  className="w-1/4 h-80 p-4 rounded-md overflow-hidden relative">
            <img src={Image2} alt="wildlife" className="w-full h-full rounded-lg object-cover" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
              <h4 className="text-3xl font-bold text-white mb-2 uppercase">ASK A QUESTION</h4>
            </div>
          </Link>

          <Link to="fact" className="w-1/4 h-80 p-4 rounded-md overflow-hidden relative">
            <img src={Image1} alt="wildlife" className="w-full h-full rounded-lg object-cover" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center ">
              <h4 className="text-3xl font-bold tex-black mb-2 uppercase">LEAVE A FACT</h4>
            </div>
          </Link>
          <Link to="donate" className="w-1/4 h-80 p-4 rounded-md overflow-hidden relative">
            <img src={Image3} alt="wildlife" className="w-full h-full rounded-lg object-cover" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
              <h4 className="text-3xl font-bold mb-2 uppercase">DONATE</h4>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Engage;
